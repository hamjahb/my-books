import React, { Component } from 'react';
import './App.css';
import parser from 'xml-js';
import BookCards from './Pages/BookCards';
import Favorites from './Pages/Favorites';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorites: [],
      value: '',
      search:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  favoriteClick =(book) => {
        
    // console.log(`${book} add to favorites`);
    const newFavorites = [...this.state.favorites ];
    const bookIndex = newFavorites.indexOf(book);

    if (bookIndex === -1) {
      // console.log(`Adding ${book} to favorites`);
      newFavorites.push(book)
    } else {

      // console.log(`Removing ${book} from favorites`);
      newFavorites.splice(bookIndex, 1);
    }
    
    this.setState({
        favorites : newFavorites
    })
}

  removeAll = () => {
    this.setState({
      favorites : []
  })
  }

  newSearch = (searchquerry) =>{
    console.log(`starting new search for ${searchquerry}`);
    
    const key = 'AiY0kCwWYFSK3RilpXntbQ';
    const query = searchquerry;
    const page = '';
    const searchCriteria = 'all'

    
    const url =  `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?q=${query}&page${page}&key=${key}&search=${searchCriteria}`
    // console.log(url);

    fetch(url)
    .then((resp) => {
      resp.text()
        .then(str => {

        // turns response from XML to json
        let json = parser.xml2js(str, {
          compact: true,
          ignoreDoctype: true,
          attributesKey: "attributes"
        });      
        
        // book search querry location 
        const querryResult = json.GoodreadsResponse.search.results.work;
        // console.log(json.GoodreadsResponse.search.results.work)

        
        // add new book items to search state
        let searcharray= []
        const bookContents = (querryResult).map((item, index) => {
          console.log(item)
          // searcharray.push(item.best_book.title._text)
          searcharray.push(item.best_book)
        })     

        this.setState({
          search: searcharray
        })
        // check current state after adding books
        // console.log(this.state.search);
      })
    })

    .catch((error) => {
      console.log(error)
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    // console.log(`value changed to ${this.state.value}`);
    
  }

  handleSubmit(event) {
    console.log('a book search was submitted ' + this.state.value);
    event.preventDefault();
    this.newSearch(this.state.value);
  }

  render() {

    // console.log(this.state.favorites);
    
    return (
      <div className="App">

        <body>

          <h2>your favorites</h2>

          <ul>
            <Favorites favorites={this.state.favorites}
            favoriteClick = {this.favoriteClick}
            removeAll = {this.removeAll}/>
          </ul>


          <h2>Search for books</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text"  onChange = {this.handleChange}>
            </input>

            <input type="submit" value="Search" />
          </form>

          <ul>
            <BookCards 
              search={this.state.search} 
              favorites = {this.state.favorites}
              favoriteClick = {this.favoriteClick}

            />
          </ul>

        </body>
      </div>
    );
  }
}

export default App;
