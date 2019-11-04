import React, {Component} from 'react';


class BookCards extends Component {
    constructor(props){
        super(props)

        this.state = {
    
        }
    }

    faveClick = (e) => {

        console.log(`${this.props.item} was clicked`);
        
    }
    

    render() {
        // console.log(this.props.search);
        const bookRender = this.props.search.map((item, key) =>{
            return(
                <div className ='card'>
                    <h5>book cover</h5>
                    <h3 key={key}>{item}</h3>
                    <p>description</p>
                    <i class="material-icons" onClick={this.faveClick}>favorite_border</i>

                </div>
            )
        })   

        
        return (
            
            bookRender? bookRender: null
        )
    }
}


export default BookCards;