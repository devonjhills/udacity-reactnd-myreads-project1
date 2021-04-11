import React, { useEffect, useState } from 'react';
import './App.css'
import * as BooksAPI from './BooksAPI'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import SearchResults from './components/SearchResults'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';

const App = () => {

  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    await BooksAPI.getAll().then((data) => {
      setBooks(data);
    })
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
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Homepage books={books} updateBook={updateBook} />
        </Route>
        <Route path='/search'>
          <SearchResults books={books} updateBook={updateBook} />
        </Route>
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}

export default App;
