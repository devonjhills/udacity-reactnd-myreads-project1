import React, { useEffect, useState } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchButton from './components/SearchButton'
import SearchResults from './components/SearchResults'
import Shelves from './components/Shelves';
import Header from './components/Header';

const App = () => {

  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    await BooksAPI.getAll().then((data) => {
      setBooks(data);
    })
  }

  const updateShelf = (allBooks) => {
    const shelf = [...new Set(allBooks.map(book => book.shelf))];
    return shelf;
  }

  const updateBook = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    books.map((thisBook) => {
      if (thisBook.id === book.id) {
        thisBook.shelf = shelf;
      }
      return thisBook;
    })
    getAllBooks();
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/' render={() => (
            <div>
              <Header />
              {updateShelf(books).map(shelf =>
                <Shelves
                  updateBook={updateBook}
                  key={shelf}
                  shelfName={shelf}
                  books={books.filter(book => book.shelf === shelf)}
                />
              )}
              <SearchButton />
            </div>
          )} />
          <Route path='/searchbooks'>
            <SearchResults books={books} updateBook={updateBook} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
