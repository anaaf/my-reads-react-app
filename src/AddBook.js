import React from 'react'
import './App.css'
import {Component} from 'react'

class AddBook extends Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event) {
        let data = {
            name: this.props.name,
            shelf: this.props.shelf     
        }
        console.log("addbook",{data})
      this.props.handleOption(data,event.target.value)
      }

    render() {
      return(
        <div>
      <li id={this.props.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.img }}></div>
          <div className="book-shelf-changer">
          <select value={this.props.state.value} onChange={this.handleChange}>
              <option value="move">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.name}</div>
        <div className="book-authors">{this.props.author}</div>
       </div>
      </li>
    </div>
      )
    }
  }

  export default AddBook