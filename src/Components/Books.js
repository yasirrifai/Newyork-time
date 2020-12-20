import React, { Component } from "react";
import axios from "axios";
import Book from '../Components/Book.js/Book';
import classes from "./Books.module.css";

class Books extends Component {
    state = {

        results:[]

    }

    componentDidMount() {
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=gjnXkHLsmA39ix7Diu59cFqzXRVG19uI')
        .then(response => {
               const data = response.data
               this.setState({...this.state,results:data.results.books});
               //console.log(data.results.books);
            })
    }
    render()
    {
        return(
                <div>
                {this.state.results.map((book) => {
                    //console.log(book);
                return (
                        <div 
                            className={classes.Books}
                            key={book.rank}
                            >
                            <Book
                                title={book.title}
                                author={book.author}
                                publisher={book.publisher}
                                />
                            <img className={classes.Image} src={book.book_image} alt=''/>
                            <div className={classes.View}>
                                <button onClick={() => window.open(book.amazon_product_url)}>VIEW MORE </button>
                            </div>
                        </div>
                    ) 
            })}</div>
        );
    }
}
export default Books;

