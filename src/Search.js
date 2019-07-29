import React from 'react'
import './App.css'
import {Component} from 'react'

class Search extends Component {
    render() {
      return (
             <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
      )
    }
  } 

  export default Search