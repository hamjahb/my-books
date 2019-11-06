import React, {Component} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'



class BookCard extends Component {
    constructor(props){
        super(props)
        
    }

    onClickFavorite = (e) => {
        e.stopPropagation()
        // console.log(` onclick ${this.props.book});
        
        this.props.favoriteClickCard(this.props.book)
    }
    
    

    render(){

        
        return(
        <Card className ='card'>
            <Image src={this.props.book.image_url._text}></Image>
            <Card.Content>
                <Card.header>{this.props.book.title._text}</Card.header>
            <p>description</p>
            <i class="material-icons"  
            onClick={this.onClickFavorite} >favorite_border</i>
            </Card.Content>
        </Card>
        )
    }
}

export default BookCard;