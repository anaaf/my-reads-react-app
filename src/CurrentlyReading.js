import React from 'react'
import './App.css'
import { Component } from 'react'
import AddBook from './AddBook.js'

class CurrentlyReading extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf -books">
                    <ol className="  books-grid">
                        {this.props.state.books && this.props.state.books.length && this.props.state.books.map((item, index) => {
                            if (item.shelf == "currentlyReading")
                                return (
                                    <AddBook value={this.props.state.value} name={item.name} author={item.author} key={item.key} img={item.img} index={index} handleOption={this.props.handleOption} state={this.props.state} shelf={item.shelf} />
                                )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default CurrentlyReading