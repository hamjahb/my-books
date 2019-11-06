import React, {Component} from 'react';
import BookCard from './Card'


class BookCards extends Component {
    constructor(props){
        super(props)

        this.state = {
    
        }

    }    

    render() {
        // console.log(this.props.search);
        const bookRender = this.props.search.map((item) =>{
            // console.log(item.image_url._text);
            
            return(
                <BookCard book={item} 
                favoriteClickCard = {this.props.favoriteClick}
                />
            )
        })   

        
        return (
            
            bookRender? bookRender: null
        )
    }
}


export default BookCards;