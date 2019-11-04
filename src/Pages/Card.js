import React, {Component} from 'react';



const Card = (props) => {
    // console.log(props.book);

    const handleClick =(e) => {
        console.log(`${props.book} handle click`);
        
        
    }
    
    return(

        <div className ='card' onClick={handleClick}>
            <h5>book cover</h5>
            <h3>{props.book}</h3>
            <p>description</p>
            <i class="material-icons" onClick={handleClick}>favorite_border</i>
        </div>
    )
}

export default Card;