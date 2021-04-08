import React from 'react'
import MoveToShelfMenu from './MoveToShelfMenu'

const BookCard = ({ book, updateBook }) => {

  return (
    <div className="book">
      <div className="book-top">
        <div style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${book.imageLinks &&
            book.imageLinks.thumbnail})`
        }} />
        <MoveToShelfMenu
          updateBook={updateBook}
          book={book}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{
        (book.authors) ?
          (book.authors).join(", ") : '*No Author Listed*'
      }
      </div>
    </div>
  )
}

export default BookCard
