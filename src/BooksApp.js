import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Component } from 'react'
import Search from './Search.js'
import Title from './Title.js'
import Book from './Book.js'




class BooksApp extends Component {
  constructor(props) {
    super(props)
    this.handleOption = this.handleOption.bind(this)
    this.deleteCurrentlyRead = this.deleteCurrentlyRead.bind(this)
    this.state = {
      showSearchPage: false,
      books: [
        {
          name: "To Kill a Mockingbird",
          author: "Harper Lee",
          img: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
          key: "To Kill a Mockingbird",
          shelf: "currentlyReading"
        },
        {
          name: "1776",
          author: "David McCullough",
          img: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
          key: "1776",
          shelf: "currentlyReading"
        },
        {
          name: "Ender's Game",
          author: "Orson Scott Card",
          img: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
          key: "Ender's Game",
          shelf: "wantToRead"
        },
        {
          name: "Harry Potter and the Sorcerer's Stone",
          author: "J.K Rowling",
          img: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
          key: "Harry Potter and the Sorcerer's Stone",
          shelf: "wantToRead"
        },
        {
          name: "The Hobbit",
          author: "J.R.R. Tolkien",
          img: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
          key: "The Hobbit",
          shelf: "read"
        },
        {
          name: "Oh, the Places You'll Go!",
          author: "J.R.R. Tolkien",
          img: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
          key: "Oh, the Places You'll Go!",
          shelf: "read"
        },
        {
          name: "The Adventures of Tom Sawyer",
          author: "Mark Twain",
          img: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
          key: "The Adventures of Tom Sawyer",
          shelf: "read"
        }
      ],
      value: ''
    }
  }

  handleOption(data, current) {
    const value = this.state.value
    const name = this.props.name
    const shelf = this.props.shelf
    let currentlyReading
    let wantToRead
    let read
    let none
    let book
    console.log("============", { data }, { current }, this.state[data.shelf])
    this.state.books.find((val, ind) => {
      if (val.name == data.name) this.state.books[ind].shelf = current
    })
    this.setState({})
  
  // if (shelf == "currentlyReading") {
  //   book = this.state.currentlyReading.filter((book) => {
  //     return book.name == name
  //   })
  // }
  // else if (shelf == "wantToRead") {
  //   book = this.state.wantToRead.filter((book) => {
  //     return book.name == name
  //   })
  // }
  // else if (shelf == "read") {
  //   book = this.state.read.filter((book) => {
  //     return book.name == name
  //   })
  // }
  // console.log(book, shelf)

  // if(value == 'wantToRead'){
  //    wantToRead = this.state.wantToRead.concat(book)
  //    read = this.state.read
  //    currentlyReading = this.state.currentlyReading
  //    none = this.state.none
  //    }

  // else if(value == 'read') {
  //    read = this.state.read.concat(book)
  //    currentlyReading = this.state.currentlyReading 
  //    wantToRead = this.state.wantToRead
  //    none = this.state.none
  //     } 

  // else if(value == 'currentlyReading') {
  //   currentlyReading = this.state.currentlyReading
  //   wantToRead = this.state.wantToRead
  //   read = this.state.read
  //   none = this.state.none
  //    } 
  // else
  //   {
  //   currentlyReading = this.state.currentlyReading
  //   wantToRead = this.state.wantToRead
  //   read = this.state.read
  //   none = this.state.none.concat(book)  
  //  }  

  //     this.setState(() => {
  //       return{
  //         currentlyReading: currentlyReading,
  //         wantToRead: wantToRead,
  //         read: read,
  //         none: none
  //       }
  //     })
}

deleteCurrentlyRead() {
  this.setState(() => {
    return {
      currentlyReading: []
    }
  })
}

render() {
  return (
    <div className="app">
      <Title />
      <Book state={this.state} handleOption={this.handleOption} />
      <Search />
    </div>
  )
}
}

export default BooksApp


