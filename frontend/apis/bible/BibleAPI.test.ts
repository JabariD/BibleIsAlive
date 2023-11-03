import BibleAPI, { ChapterVerseRange } from './BibleAPI';
import fetchMock from 'jest-fetch-mock';

// Mock the global fetch function
global.fetch = fetchMock;

describe('BibleAPI', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetches verses correctly', async () => {
    const mockVerses = { verses: 'Mocked verses' };
    fetchMock.mockResponseOnce(JSON.stringify(mockVerses));

    const verseRange: ChapterVerseRange[] = [{ chapter: 1, verseRange: "1-2" }, { chapter: 3, verseRange: "1-2" }];
    const response = await BibleAPI.getVerses('John', verseRange);

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual('https://bible-api.com/John+1:1-2,3:1-2');
    expect(response).toEqual(mockVerses);
  });

  it('throws an error when the fetch fails', async () => {
    fetchMock.mockReject(new Error('Fetch failed'));

    const verseRange: ChapterVerseRange[] = [{ chapter: 1, verseRange: "1-2" }, { chapter: 3, verseRange: "1-2" }];

    await expect(BibleAPI.getVerses('John', verseRange)).rejects.toThrow('Fetch failed');
  });

  it('throws an error when the HTTP response is not ok', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

    const verseRange: ChapterVerseRange[] = [{ chapter: 1, verseRange: "1-2" }, { chapter: 3, verseRange: "1-2" }];

    await expect(BibleAPI.getVerses('John', verseRange)).rejects.toThrow('HTTP error! status: 500');
});
});