import {ChangeEvent, FC, useRef} from "react";
import {BookProps} from "../models/components/props.ts";

export const BookShelfChanger: FC<BookProps> = ({book, shelf, handleUpdate}) => {
    const shelfRef = useRef<HTMLSelectElement>(null);

    const handleChangeShelf = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
        handleUpdate(book, event.target.value);
    }
    return (
        <div className="book-shelf-changer">
            <select onChange={handleChangeShelf} ref={shelfRef} value={shelf} key={shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
};