/**
 * BibleAPI for accessing the Bible.
 * 
 * Using https://bible-api.com.
 * TODO: Use Bible API.
 */

// Chapter Verse Range.
export interface ChapterVerseRange {
    chapter: number,
    verseRange: string,
};

/**
 * This class provides methods to interact with the Bible API.
 * It includes methods to fetch verses from a specific book of the Bible.
 */
class BibleAPI {
    /**
     * Fetch verses from the Bible.
     * Note: The book must be constant.
     * 
     * Example: If verseRange is [{ chapter: 1, verseRange: "1-2" }, { chapter: 3, verseRange: "1-2" }],
     *          then verseRangeString becomes "1:1-2,3:1-2".
     */
    static async getVerses(book: string, verseRange: ChapterVerseRange[]): Promise<any> {
        try {
            const verseRangeString = verseRange.map(range => `${range.chapter}:${range.verseRange}`).join(",");
            const url = `${this.BASE_URL}/${book}+${verseRangeString}`;

            return await this.fetchData(url);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // Returns the JSON data from the given url. If HTTP error, throws.
    private static async fetchData(url: string): Promise<any> {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                console.log(response.statusText);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // Base URL for Bible API.
    private static BASE_URL = 'https://bible-api.com';
};

export default BibleAPI;