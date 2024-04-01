import {FC} from "react";
import {BookProps} from "../models/components/props.ts";
import {BookShelfChanger} from "./BookShelfChanger.tsx";
import {Book} from "../models/service/Book.ts";

export const BookItem: FC<BookProps> = ({book, shelf, handleUpdate}) => {
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : 'default-placeholder.svg'}")`
                    }}
                ></div>
                <BookShelfChanger book={book} shelf={shelf}
                                  handleUpdate={(book: Book, shelf: string) => handleUpdate(book, shelf)}/>
            </div>
            <div className="book-title">${book.title}</div>
            <div className="book-authors">${book.authors ? book.authors.join(", ") : "Unknown Authors"}</div>
        </div>
    );
}