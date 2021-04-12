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

  const updateBook = async (book, shelfChange) => {
    await BooksAPI.update(book, shelfChange).then(() => {
      let onShelf = false;
      const newBooks = books.map((thisBook) => {
        if (thisBook.id === book.id) {
          onShelf = true;
          return { ...thisBook, shelf: shelfChange };
        }
        return thisBook;
      });
      (!onShelf && newBooks.push({ ...book, shelf: shelfChange }))
      setBooks(newBooks);
    });
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
