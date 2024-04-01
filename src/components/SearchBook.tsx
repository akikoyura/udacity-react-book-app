import {ChangeEvent, FC, useRef} from "react";
import {SearchBookProps} from "../models/components/props.ts";
import {Link} from "react-router-dom";
import {BookItem} from "./BookItem.tsx";
import {Book} from "../models/service/Book.ts";

export const SearchBook: FC<SearchBookProps> = ({books, handleSearch, searchedBook, handleReset, handleUpdate}) => {
    const searchBook = useRef<HTMLInputElement>(null);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleSearch(event.target.value);
    }

    const searchBookResult: Book[] = (searchedBook.length > 0 ? searchedBook.map(item => {
        const bookInProps = books.find((book: Book) => book.id === item.id)
        if (bookInProps) {
            item.shelf = bookInProps.shelf;
        } else {
            item.shelf = "none";
        }
        return item;
    }) : [])

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to={"/"}>
                    <button className="close-search" onClick={handleReset}>Close
                    </button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input ref={searchBook}
                           type="text"
                           placeholder="Search by title, author, or ISBN"
                           onChange={handleChange}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchBookResult.map((book: Book) => <BookItem key={book.id} book={book} shelf={book.shelf}
                                                                    handleUpdate={(book: Book, shelf: string) => handleUpdate(book, shelf)}/>)}
                </ol>
            </div>
        </div>
    );
}