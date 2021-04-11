import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import BookList from './BookList'
import ShelfHeader from './ShelfHeader'

const Shelves = ({ books, updateBook, shelfName }) => {

  const formatHeading = (shelfName) => {
    let name;
    if (shelfName === 'read') {
      name = 'Read'
    } else if (shelfName === 'currentlyReading') {
      name = 'Currently Reading'
    } else if (shelfName === 'wantToRead') {
      name = 'Want To Read'
    }
    return name;
  }

  return (
    <Jumbotron className="my-jumbo">
      <ShelfHeader heading={formatHeading(shelfName)} />
      <BookList
        updateBook={updateBook}
        books={books}
      />
    </Jumbotron>
  )
}

export default Shelves
