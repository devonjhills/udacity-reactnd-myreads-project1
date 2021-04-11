import React from 'react'
import Shelves from './Shelves'

const Homepage = ({books, updateBook}) => {

  const updateShelf = (allBooks) => {
    const shelf = [...new Set(allBooks.map(book => book.shelf))];
    return shelf;
  }

  return (
    <>
      {updateShelf(books).map(shelf =>
        <Shelves
          updateBook={updateBook}
          key={shelf}
          shelfName={shelf}
          books={books.filter(book => book.shelf === shelf)}
        />
      )}
    </>
  )
}

export default Homepage
