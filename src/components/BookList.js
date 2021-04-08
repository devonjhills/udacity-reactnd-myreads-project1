import React from 'react'
import BookCard from './BookCard'

const BookList = ({ books, updateBook }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <BookCard
              updateBook={updateBook}
              book={book}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default BookList
