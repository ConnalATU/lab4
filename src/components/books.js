import React from "react";
import { BookItem } from "./bookItem"; //importing bookItem

export class Books extends React.Component {

    render() {
        //will use built in map to display books
        return this.props.books.map((book) => {
            //book items and passing key
            return <BookItem book={book} key={book.isbn}> </BookItem>
        }
        );
    }
}