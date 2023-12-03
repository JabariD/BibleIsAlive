

interface Message {
  role: string;
  content: string;
};

/**
 * OpenAIAssistantAPI for interacting with OpenAI's Assistants API.
 * This class abstracts the API calls to create assistants, threads, and runs.
 * 
 * Usage:
 * 1. Create thread. (createThread)
 * 2. Add message to thread. (addMessage)
 * 3. Run. the Assistant read the Thread and decide whether to call tools (if they are enabled) or 
 * simply use the model to best answer the query. As the run progresses, the assistant appends Messages to the thread (createRun)
 * 4. Check the run status if "completed". (getRun)
 * 5. Display the assistant response. (getMessages)
 */
class AIAPI {
  constructor() {
    if (!process.env.REACT_APP_OPENAI_API_KEY) {
      throw new Error('API key is not defined in the environment variables.');
    }

    if (!process.env.REACT_APP_OPENAI_API_ASSISTANTS_KEY) {
      throw new Error('Assistants key is not defined in the environment variables.');
    }

    this.assistantId_ = process.env.REACT_APP_OPENAI_API_ASSISTANTS_KEY;
    this.apiKey_ = process.env.REACT_APP_OPENAI_API_KEY; // Use the API key from the .env file
    this.baseUrl_ = 'https://api.openai.com/v1';
  }

  /**
 * Simplified interaction with the OpenAI Assistant API.
 * Clients can start a new conversation or continue an existing one.
 * 
 * @param {string} message - The message to send to the assistant.
 * @param {string} [threadId] - The ID of the existing thread to continue the conversation.
 * @returns {Promise<any>} - The response from the assistant.
 */
  async interactWithAssistant(message: string, threadId: string): Promise<any> {
    console.log('Starting interaction with assistant.');
    const messageObj: Message = { role: 'user', content: message };

    // Add the message to the existing thread.
    console.log(`Adding message to existing thread with threadId: ${threadId}`);
    // The addMessageToThread function expects a Message object, so we construct one.
    await this.addMessageToThread(threadId, messageObj);

    console.log(`Creating a run for threadId: ${threadId}`);
    // Create a run to process the conversation.
    const runResponse = await this.createRun(threadId);
    const runId = runResponse.id; // Assuming the response contains the run ID.
    console.log(`Run created with runId: ${runId}`);

    // Check the run status until it's completed.
    await this.pollRunStatusForCompleted(threadId, runId);

    console.log('Run completed, retrieving messages.');
    // Retrieve and return the assistant's messages.
    return await this.getMessages(threadId);
  }

  /**
   * Retrieves the latest AI-generated message from a thread.
   * 
   * @param {string} threadId - The ID of the thread to retrieve the message from.
   * @returns {Promise<string>} - The latest message from the AI.
   */
  async getLatestAIMessage(threadId: string): Promise<string> {
    const messagesResponse = await this.getMessages(threadId);
    const messages: Message[] = messagesResponse.data;
    // Filter for messages where the role is 'assistant' and get the last one.
    const aiMessages = messages.filter(message => message.role === 'assistant');
    if (aiMessages.length > 0) {
      return aiMessages[aiMessages.length - 1].content;
    }
    return ''; // Return an empty string if there are no AI messages.
  }

  /**
 * Makes an HTTP request to the OpenAI API with the provided endpoint and method.
 * Includes necessary headers and handles the response, throwing an error for non-2xx status codes.
 * 
 * @param {string} endpoint - The API endpoint to make the request to.
 * @param {string} [method='GET'] - Optional; The HTTP method to use for the request.
 * @param {any} [body] - Optional; The body of the request for POST methods.
 * @returns {Promise<any>} - The JSON response from the API.
 */
  private async makeRequest(endpoint: string, method: string = 'GET', body?: any): Promise<any> {
    const headers = {
      'Authorization': `Bearer ${this.apiKey_}`,
      'Content-Type': 'application/json',
      'OpenAI-Beta': 'assistants=v1',
    };

    const response = await fetch(`${this.baseUrl_}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${error}`);
    }

    return await response.json();
  }

  /**
 * Polls the run status until it's completed or until the maximum number of retries is reached.
 * 
 * @param {string} threadId - The ID of the thread associated with the run.
 * @param {string} runId - The ID of the run to check the status of.
 * @param {number} maxRetries - The maximum number of retries before giving up.
 * @param {number} interval - The interval between retries in milliseconds.
 * @returns {Promise<void>} - Resolves when the run is completed or throws an error if it times out.
 */
  private async pollRunStatusForCompleted(threadId: string, runId: string, maxRetries: number = 30, interval: number = 1000): Promise<void> {
    let runStatus;
    let retries = 0;

    console.log('Checking run status.');
    do {
      runStatus = await this.getRun(threadId, runId);
      console.log(`Run status: ${runStatus.status}, retries: ${retries}`);
      if (runStatus.status === 'completed') {
        break;
      }
      // Delay mechanism to avoid excessive polling.
      await new Promise(resolve => setTimeout(resolve, interval));
      retries++;
    } while (retries < maxRetries);

    if (runStatus.status !== 'completed') {
      throw new Error('The process did not complete within the expected time.');
    }
  }

  /**
   * Creates a new conversation thread with an array of initial messages as strings.
   * Converts the array of strings to Message type with 'user' role before sending.
   * 
   * @param {string[]} initialMessages - An array of strings to initialize the thread with.
   * @returns {Promise<any>} - The response from the API with the new thread details.
   */
  async createThread(initialMessages: string[]): Promise<any> {
    const messages: Message[] = initialMessages.map(content => ({ role: 'user', content }));
    return this.makeRequest('/threads', 'POST', { messages });
  }

  /**
 * Retrieves the details of an existing conversation thread by its ID.
 * This can include the thread's messages and status.
 * 
 * @param {string} threadId - The ID of the thread to retrieve.
 * @returns {Promise<any>} - The response from the API with the thread details.
 */
  private async getThread(threadId: string): Promise<any> {
    return this.makeRequest(`/threads/${threadId}`);
  }

  /**
   * Adds a message to an existing conversation thread.
   * This can be used to continue a conversation with the OpenAI Assistant.
   * 
   * @param {string} threadId - The ID of the thread to add the message to.
   * @param {Message} message - The message to add.
   * @returns {Promise<any>} - The response from the API confirming the message addition.
   */
  private async addMessageToThread(threadId: string, message: Message): Promise<any> {
    return this.makeRequest(`/threads/${threadId}/messages`, 'POST', message);
  }

  /**
 * Creates a run to process the conversation in a given thread.
 * A run represents the Assistant's process of reading and responding to the thread's messages.
 * 
 * @param {string} threadId - The ID of the thread to create the run for.
 * @param {string} assistantId - The ID of the assistant to use for processing the run.
 * @param {string} [instructions] - Optional; Special instructions for the assistant.
 * @returns {Promise<any>} - The response from the API with the new run details.
 */
  private async createRun(threadId: string, instructions?: string): Promise<any> {
    const body: any = {
      assistant_id: this.assistantId_,
    };

    if (instructions) {
      body.instructions = instructions;
    }

    return this.makeRequest(`/threads/${threadId}/runs`, 'POST', body);
  }

  /**
 * Retrieves all messages from a conversation thread.
 * This can be used to review the conversation history.
 * 
 * @param {string} threadId - The ID of the thread to retrieve messages from.
 * @returns {Promise<any>} - The response from the API with the thread's messages.
 */
  private async getMessages(threadId: string): Promise<any> {
    return this.makeRequest(`/threads/${threadId}/messages`);
  }

  /**
 * Retrieves the status and details of a specific run within a conversation thread.
 * This can be used to check the progress of the Assistant's processing of the conversation.
 * 
 * @param
 *  * Retrieves the status and details of a specific run within a conversation thread.
 * This can be used to check the progress of the Assistant's processing of the conversation.
 * 
 * @param {string} runId - The ID of the run to check the status of.
 * @returns {Promise<any>} - The response from the API with the status and details of the run.
 */
  private async getRun(threadId: string, runId: string): Promise<any> {
    return this.makeRequest(`/threads/${threadId}/runs/${runId}`);
  }

  // This ID is the access token for OpenAI.
  private apiKey_: string;
  private baseUrl_: string;
  // This ID is taken from https://platform.openai.com/assistants.
  private assistantId_: string;
}

export default AIAPI;