import React, { Component } from 'react';
import './App.css';
import parser from 'xml-js';

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
    const search = 'all'


    const url =  `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?q=${query}&page${page}&key=${key}&search=${search}`
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
        
        // book search queery location 
        const querryResult = json.GoodreadsResponse.search.results.work;
        // console.log(json.GoodreadsResponse.search.results.work)
        let searcharray= []
        const bookContents = (querryResult).map((item, index) => {
          // console.log(item)
          searcharray.push(item.best_book.title._text)
        })     

        this.setState({
          search: searcharray
        })
        console.log(this.state.search);
      })
    })

    .catch((error) => {
      console.log(error)
    })
  }






  render() {
    const bookRender = this.state.search.map((item, key) =>
    // console.log(item)
    <li key={key}>{item}</li>
    )

    return (
      <div className="App">
        {/* <header>
          <nav>
            <collection>Collections filter</collection>
            <favorites> Favorites filter</favorites>
          </nav>
        </header> */}

        {/* <body> */}
          <h2>body things to be here</h2>
          <ul>
            {bookRender}
          </ul>

        {/* </body> */}
      </div>
    );

  }

}

export default App;
