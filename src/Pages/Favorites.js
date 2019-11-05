import React, {Component} from 'react';
import FavoriteBookCards from './FavoriteBookCards'


class Favorites extends Component {

    render () {
        // console.log(this.props.favorites);
        
        return(
        <FavoriteBookCards 
        favorites={this.props.favorites}
        favoriteClick = {this.props.favoriteClick}/>
        )
    }
}



export default Favorites;