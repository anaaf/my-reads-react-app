import React from 'react'
import './App.css'
import {Component} from 'react'
import BooksApp from './BooksApp.js'


class App extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return (
            <BooksApp />
        )
    }
}

export default App