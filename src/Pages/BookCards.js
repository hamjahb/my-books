import React, {Component} from 'react';
import Card from './Card'


class BookCards extends Component {
    constructor(props){
        super(props)

        this.state = {
    
        }

    }

    // faveClick = (e) => {
    //     console.log(`${this.props.search} was clicked`);
        
        
    // }
    

    render() {
        // console.log(this.props.search);
        const bookRender = this.props.search.map((item) =>{
            // console.log(item);
            
            return(
                <Card book={item} 
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