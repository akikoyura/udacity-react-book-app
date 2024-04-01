import {useEffect, useState} from 'react'
import './App.css'
import {Book} from "./models/service/Book.ts";
import {getAll, search, update} from "./services/BookAPI.ts";
import {debounce} from 'throttle-debounce';
import {Route, Routes} from "react-router-dom";
import {ListBooks} from "./components/ListBooks.tsx";
import {SearchBook} from "./components/SearchBook.tsx";
import {ReadingStatus} from "./common/constants.ts";

function App() {
    const [booksList, setBooksList] = useState<Book[]>([]);
    const [searchedBook, setSearchedBook] = useState<Book[]>([])

    const handleGetBooks = async () => {
        const books = await getAll();
        setBooksList(books);
    }

    const handleUpdate = async (book: Book, shelf: string) => {
        await update(book, shelf);
        if (shelf === "none") {
            setBooksList(prevState => prevState.filter(item => item.id !== book.id));
        } else {
            const books = await getAll();
            setBooksList(books);
        }
    }

    const handleSearch = debounce(350, (query: string) => {
        if (!query) {
            setSearchedBook([])
        } else {
            search(query).then(books => {
                setSearchedBook(books)
            }).catch(() => setSearchedBook([]))
        }
    })

    const clearSearch = () => {
        setSearchedBook([])
    }

    useEffect(() => {
        handleGetBooks().then()
    }, []);

    return (
        <div className="app">
            <Routes>
                <Route path="/"
                       element={<ListBooks books={booksList} shelves={ReadingStatus} handleUpdate={handleUpdate}/>}/>
                <Route path="/search"
                       element={<SearchBook searchedBook={searchedBook} books={booksList ?? []}
                                            handleSearch={handleSearch}
                                            handleUpdate={(book: Book, shelf: string) => handleUpdate(book, shelf)}
                                            handleReset={() => clearSearch()}/>}/>
            </Routes>
        </div>
    )
}

export default App;