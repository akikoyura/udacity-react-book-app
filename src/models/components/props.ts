import {Book} from "../service/Book.ts";
import {debounce} from "throttle-debounce";
import {ReadingStatus} from "../../common/constants.ts";

export type ListBooksProps = {
    books: Book[];
    shelves: typeof ReadingStatus;
    handleUpdate: (book: Book, shelf: string) => void;
}

export type BookShelfProps = {
    books: Book[];
    shelf: string;
    handleUpdate: (book: Book, shelf: string) => void;
}

export type BookProps = {
    book: Book;
    shelf: string;
    handleUpdate: (book: Book, shelf: string) => void;
}

export type SearchBookProps = {
    searchedBook: Book[];
    books: Book[];
    handleReset: () => void;
    handleSearch: debounce<(query: string) => void>;
    handleUpdate: (book: Book, shelf: string) => void;
}