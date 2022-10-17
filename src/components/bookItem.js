import React from "react";
import Card from 'react-bootstrap/Card'; //importing bootsrap card

export class BookItem extends React.Component {
    render() {
        return (
            <div>
                {/* //reading json data from book array
                    <h4>{this.props.book.title}</h4>
                    <img src={this.props.book.thumbnailUrl}></img>
                    <p>{this.props.book.authors[0]}</p> */}

                {/* Card imported from bootstrap           */}
                <Card>
                    {/* Displaying data from book array           */}
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.thumbnailUrl} width="200" height="200"></img>
                            <footer>
                                {this.props.book.authors[0]}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}