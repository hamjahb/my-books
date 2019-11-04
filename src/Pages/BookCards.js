import React, {Component} from 'react';


class BookCards extends Component {
    constructor(props){
        super(props)

        this.state = {
    
        }
    }

    FaveClick = (e) => {        
        console.log(`${this.item} was clicked`);
        
    }
    

    render() {
        // console.log(this.props.search);
        const bookRender = this.props.search.map((item, key) =>{
            return(
                <div className ='card' onClick={this.FaveClick}>
                    <h5>book cover</h5>
                    <h3 key={key}>{item}</h3>
                    <p>description</p>
                </div>
            )
        })   

        
        return (
            
            bookRender? bookRender: null
        )
    }
}


export default BookCards;