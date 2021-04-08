import React from 'react'
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
    <div className="bookshelf">
      <ShelfHeader heading={formatHeading(shelfName)} />
      <BookList
        updateBook={updateBook}
        books={books}
      />
    </div>
  )
}

export default Shelves
