import React, {Component} from 'react';
import App from '../App'
import { log } from 'util';


// const Card = (props) => {
//     // console.log(props.book);

//     const favoriteClick =(e) => {
//         console.log(`${props.book} handle click`);
        
        
        
        
//     }
   
    
//     return(

//         <div className ='card'>
//             <h5>book cover</h5>
//             <h3>{props.book}</h3>
//             <p>description</p>
//             <i class="material-icons"  onClick={() => favoriteClick()} >favorite_border</i>
//         </div>
//     )
// }

class Card extends Component {
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

export default Card;