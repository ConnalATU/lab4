import React from "react";
import { Books } from "./books"; //importing component 
import axios from "axios";


export class Read extends React.Component {
    //life cycle hook
    componentDidMount() {
         axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784') //json data url
        .then((response)=>{
            this.setState({books:response.data}) //putting data response into state 
        })
        .catch((error)=>{
            console.log(error); //error handling 
        })

    }
    

    state = {
        //creating array called books
        books: []
        
    }
    render() {
        return (
            <div>
                <h3>This is the Read Component</h3>
                {/* Displaying Component */} 
                <Books books={this.state.books}></Books>
            </div>
        );

    }
}