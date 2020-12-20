import React from 'react';
import classes from './Book.module.css';

const book = (props) => {
    return(
        <div>
            <p className={classes.Title}>{props.title}</p>
            <p className={classes.Author}>Author: {props.author}</p>
            <p className={classes.Publisher}>Publisher: {props.publisher}</p>    
        </div>
         
    );
}
export default book;