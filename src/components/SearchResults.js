import React, { useState } from 'react';
import BookList from './BookList';
import * as BooksAPI from '../BooksAPI';
import SearchBar from './SearchBar';

const SearchResults = ({ books, updateBook }) => {

  const [query, setQuery] = useState("");
  const [bookResults, setBookResults] = useState([]);


  const handleQuery = async (query) => {
    setQuery(query);
    console.log(query);
    if (query !== '') {
      await BooksAPI.search(query).then((data) => {
        if (!data || data.error) {
          console.log('no results found for this search string');
          setBookResults([]);
        } else if (Array.isArray(data)) {
          data = data.map((book) => {
            const thisBook = books.find(({ id }) => book.id === id);
            console.log(thisBook);
            return {
              ...book,
              shelf: thisBook?.shelf ?? 'none',
            }
          })
          setBookResults(data);
        }
      })
    } else {
      setBookResults([]);
    }
  };



  return (
    <div className="search-books">
      <SearchBar query={query} handleQuery={handleQuery} />
      <div className="search-books-results">
        <ol className="books-grid">
          {bookResults.length > 0 ?
            <BookList
              books={bookResults}
              updateBook={updateBook}
            /> :
            <span className="no-results">No Results</span>}
        </ol>
      </div>
    </div>
  )
};

export default SearchResults;
