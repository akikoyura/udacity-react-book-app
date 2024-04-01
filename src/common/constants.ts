type ReadingStatusKey = 'currentlyReading' | 'wantToRead' | 'read';

export const ReadingStatus: Record<ReadingStatusKey, string> = {
    currentlyReading: "Currently Reading",
    wantToRead: "Want to Read",
    read: "Read"
}