import React from 'react'
import './App.css'
import { Component } from 'react'
import AddBook from './AddBook.js'

class Read extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf -books">
                    <ol className="books-grid">

                        {this.props.state.books && this.props.state.books.length && this.props.state.books.map((item) => {
                            if (item.shelf == "read")
                                return (
                                    <AddBook name={item.name} author={item.author} key={item.key} img={item.img} handleChange={this.props.handleChange} handleOption={this.props.handleOption} state={this.props.state} shelf={item.shelf} />
                                )
                        })}

                    </ol>
                </div>
            </div>
        )
    }
}

export default Read