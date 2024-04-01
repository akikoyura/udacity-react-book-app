import {FC} from "react";
import {ListBooksProps} from "../models/components/props.ts";
import {BookShelf} from "./BookShelf.tsx";
import {ReadingStatus} from "../common/constants.ts";
import {Book} from "../models/service/Book.ts";
import {Link} from "react-router-dom";

export const ListBooks: FC<ListBooksProps> = ({books, shelves, handleUpdate}) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {Object.keys(shelves).map((shelf) =>
                        <BookShelf key={shelf} books={books.filter(item => item.shelf === shelf)}
                                   shelf={ReadingStatus[shelf as keyof typeof ReadingStatus]}
                                   handleUpdate={(book: Book, shelf: string) => handleUpdate(book, shelf)}/>
                    )}
                </div>
            </div>
            <div className="open-search"><Link to={"search"}>Add a Book</Link></div>
        </div>
    );
};