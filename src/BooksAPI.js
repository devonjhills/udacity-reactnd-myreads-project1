
const api = "https://reactnd-books-api.udacity.com"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)
    .then(console.log('test get'))

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)
    .then(console.log('test getall'))

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())
    .then(console.log('test update'))

export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then((data) => {
      if (!data.errors) {
        return data.books;
      } else {
        console.log('ERROR SEARCHING');
        return [];
      }
    });
