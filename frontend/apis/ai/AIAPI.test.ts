// AIAPI.test.ts
import AIAPI from './AIAPI';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
    fetchMock.resetMocks();
});

describe('AIAPI', () => {
    const apiKey = 'test_api_key';
    process.env.REACT_APP_OPENAI_API_KEY = apiKey;
    process.env.REACT_APP_OPENAI_API_ASSISTANTS_KEY = apiKey;
    const aiApi = new AIAPI();

    test('interactWithAssistant creates a new thread if no threadId is provided', async () => {
        const message = 'Hello, Assistant!';
        const mockThreadResponse = { id: 'new_thread_id' };
        const mockAddMessageToThreadResponse = {};
        const mockRunResponse = { id: 'new_run_id', status: 'completed' };
        const mockMessagesResponse = { response: [{ role: 'assistant', content: 'Hello, User!' }] };

        fetchMock.mockResponseOnce(JSON.stringify(mockThreadResponse)) // Creating thread.
            .mockResponseOnce(JSON.stringify(mockAddMessageToThreadResponse)) // Adding message to thread.
            .mockResponseOnce(JSON.stringify(mockRunResponse)) // Creating the run.
            .mockResponseOnce(JSON.stringify(mockRunResponse)) // Is run completed?
            .mockResponseOnce(JSON.stringify(mockMessagesResponse)); // Retrieving messages.

        const threadIdResponse = await aiApi.createThread([message]);
        const response = await aiApi.interactWithAssistant(message, threadIdResponse.id);

        expect(fetchMock.mock.calls.length).toEqual(5);
        expect(response).toEqual(mockMessagesResponse);
    });

    test('getLatestAIMessage retrieves the latest AI message', async () => {
        const threadId = 'test_thread_id';
        const mockMessagesResponse = {
            data: [
                { role: 'user', content: 'User message' },
                { role: 'assistant', content: 'AI message 1' },
                { role: 'assistant', content: 'AI message 2' }
            ]
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockMessagesResponse));

        const latestMessage = await aiApi.getLatestAIMessage(threadId);

        expect(fetchMock.mock.calls.length).toEqual(1);
        expect(latestMessage).toEqual('AI message 2');
    });

});