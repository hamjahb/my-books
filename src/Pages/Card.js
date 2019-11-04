import React, {Component} from 'react';


const Card = (props) => {
    // console.log(props.book);

    // const handleClick =(e) => {
    //     console.log(`${props.book} handle click`);
    //     this.props.onFavoriteClick(props.book)
    // }
   
    
    return(

        <div className ='card'>
            <h5>book cover</h5>
            <h3>{props.book}</h3>
            <p>description</p>
            <i class="material-icons" onClick={() => props.favoriteClick()}>favorite_border</i>
        </div>
    )
}

export default Card;