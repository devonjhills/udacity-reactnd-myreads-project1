import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import BookList from './BookList'
import ShelfHeader from './ShelfHeader'

const Shelves = ({ books, updateBook, shelfName }) => {

  return (
    <Jumbotron fluid className="my-jumbo">
      <ShelfHeader heading={shelfName} />
      <BookList
        updateBook={updateBook}
        books={books}
      />
    </Jumbotron>
  )
}

export default Shelves
