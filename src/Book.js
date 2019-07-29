import React from 'react'
import './App.css'
import {Component} from 'react'
import CurrentlyReading from './CurrentlyReading.js'
import WantToRead from './WantToRead.js'
import Read from './Read.js'

class Book extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      return(
        <div>
        <CurrentlyReading state={this.props.state} handleOption = {this.props.handleOption} />
        <WantToRead state={this.props.state} handleOption = {this.props.handleOption} />
        <Read state={this.props.state} handleOption = {this.props.handleOption} />
        </div>
      )
    }
  }

  export default Book