import React, {Component} from 'react';


class Favorites extends Component {
    constructor(props){
        super(props)
        this.setState={
            filter:'all'
        }
    }

    handleFilterClick = (filter) => {
        console.log(`setting filter to ${filter}`);
        this.setState({
            filter:'favorite'
        })
    };

    render () {
        // console.log(this.props.favorites);
        
        return(
        <h3>can i haz stuffs</h3>
        )
    }
}



export default Favorites;