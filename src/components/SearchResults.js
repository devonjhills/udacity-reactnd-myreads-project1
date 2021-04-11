import React, { useState } from 'react';
import BookList from './BookList';
import * as BooksAPI from '../BooksAPI';
import SearchBar from './SearchBar';
import { Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons'

const SearchResults = ({ books, updateBook }) => {

  const [query, setQuery] = useState("");
  const [bookResults, setBookResults] = useState([]);

  const handleQuery = async (query) => {
    setQuery(query);
    if (query !== '') {
      await BooksAPI.search(query).then((data) => {
        if (!data || data.error) {
          setBookResults([]);
        } else if (Array.isArray(data)) {
          data = data.map((book) => {
            const thisBook = books.find(({ id }) => book.id === id);
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
    <Jumbotron className="m-1">
      <SearchBar query={query} handleQuery={handleQuery} />
      <div className="search-books-results">
        {bookResults.length > 0 ?
          <BookList
            books={bookResults}
            updateBook={updateBook}
          /> :
          <h3 className="text-center mt-5">
            <FontAwesomeIcon className="mr-1" icon={faFrown} />No Results
          </h3>
        }
      </div>
    </Jumbotron>
  )
};

export default SearchResults;
