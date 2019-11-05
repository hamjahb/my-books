import React, {Component} from 'react';



class FavoriteCards extends Component {
    constructor(props){
        super(props)
        
    }

    onClickFavorite = (e) => {
        e.stopPropagation()
        // console.log('on click work');
        this.props.favoriteClickCard(this.props.book)
    }
    
    

    render(){

        
        return(
        <div className ='card'>
            <h5>book cover</h5>
            <h3>{this.props.book}</h3>
            <p>description</p>
            <i class="material-icons"  
            onClick={this.onClickFavorite} >favorite_border</i>
        </div>
        )
    }
}

export default FavoriteCards;