import React, {Component} from 'react';



class FavoriteCards extends Component {
    constructor(props){
        super(props)
        
    }

    
    

    render(){

        
        return(
        <div className ='card'>
            <img src={this.props.book.image_url._text}></img>
            <h3>{this.props.book}</h3>
            <p>description</p>
            <i class="material-icons"  
            onClick={this.onClickFavorite} >favorite_border</i>
        </div>
        )
    }
}

export default FavoriteCards;