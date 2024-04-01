import {FC} from "react";
import {BookShelfProps} from "../models/components/props.ts";
import {BookItem} from "./BookItem.tsx";
import {Book} from "../models/service/Book.ts";

export const BookShelf: FC<BookShelfProps> = ({books, shelf, handleUpdate}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books?.map(item => <li key={item.id}>
                        <BookItem book={item} shelf={shelf} handleUpdate={(book: Book, shelf: string) => handleUpdate(book, shelf)}/>
                    </li>)}
                </ol>
            </div>
        </div>
    );
}