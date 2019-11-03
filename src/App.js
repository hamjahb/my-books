import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import parser from 'xml-js';
// import {} from 'react-xml-parser';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorites: [],
      collection: [],

    }
  }

  getRequest = () => {
    const authorId = '1077326';
    const key = 'AiY0kCwWYFSK3RilpXntbQ';

    const url = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/author/list.xml?key=${key}&id=${authorId}&page=`;

    console.log(url);


    fetch(url)
      .then((resp) => {
        resp
          .text()
          .then(str => {
            let json = parser.xml2js(str, {
              compact: true,
              ignoreDoctype: true,
              attributesKey: "attributes"
            });           
             console.log(json);
          })
      })

      .catch((error) => {
        console.log(error)
      })

  }

  render() {
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
        {this.getRequest()}

        {/* </body> */}
      </div>
    );

  }

}

export default App;
