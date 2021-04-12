import React from 'react'
import Shelves from './Shelves'
import { SHELFINFO } from '../constants'
import Footer from './Footer';

const Homepage = ({ books, updateBook }) => {

  const displayShelves = SHELFINFO.filter(shelf => shelf.key !== 'none');

  return (
    <>
      {displayShelves.map(shelf =>
        <Shelves
          updateBook={updateBook}
          key={shelf.key}
          shelfName={shelf.label}
          books={books.filter(book => book.shelf === shelf.key)}
        />
      )}
      <Footer />
    </>
  )
}

export default Homepage
