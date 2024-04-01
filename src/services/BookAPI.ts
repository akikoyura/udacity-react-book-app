import axios from "axios";
import {Book} from "../models/service/Book.ts";

const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substring(-8);

const headers = {
    Accept: "application/json",
    Authorization: token,
};

export const get = async (bookId: string) =>
    axios.get(`${api}/books/${bookId}`, {headers})
        .then(res => res.data)
        .then(data => data.book);

export const getAll = async (): Promise<Book[]> => {
    let books: Book[] = []
    await axios.get(`${api}/books`, {headers})
        .then(res => books = res.data["books"]);
    return books
}

export const update = async (book: Book, shelf: string) => {
    console.log("shelf: ", shelf);
    await axios.put(`${api}/books/${book.id}`, JSON.stringify({shelf}), {
        headers: {
            ...headers,
            "Content-Type": "application/json",
        },
    }).then(res => res.data);
}

export const search = (query: string) =>
    axios.post(`${api}/search`, JSON.stringify({query}), {
        headers: {
            ...headers,
            "Content-Type": "application/json",
        },
    }).then((res) => res.data).then((data) => data.books);
