import React, { Component } from 'react';
import './App.css';
import parser from 'xml-js';
import BookCards from './Pages/BookCards';
import Favorites from './Pages/Favorites';
// import FavoriteBookCards from './Pages/FavoriteBookCards'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorites: [],
      collection: [],
      search:[]
    }
  }


  
  componentDidMount() {
    const key = 'AiY0kCwWYFSK3RilpXntbQ';
    const query = 'hobbit'
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
          // console.log(item)
          searcharray.push(item.best_book.title._text)
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

  render() {

    // console.log(this.state.favorites);
    
    return (
      <div className="App">

        <header>
          <nav>
            <collection>| Collections filter | </collection>
            {/* <favorites>| Favorites filter | </favorites> */}
          
          </nav>
        </header>

        <body>

          <h2>your favorites</h2>

          <ul>
            <Favorites favorites={this.state.favorites}
            favoriteClick = {this.favoriteClick}/>
          </ul>


          <h2>search</h2>
          <ul>
            <BookCards 
              search={this.state.search} 
              favorites = {this.state.favorites}
              favoriteClick = {this.favoriteClick}

            />
          </ul>

        </body>


        <footer>
          <h2>dis be footer</h2>
        </footer>
      </div>
    );
  }
}

export default App;
