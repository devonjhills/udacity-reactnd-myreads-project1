import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faDatabase, faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar fixed='top' bg="dark" variant="dark" >
      <Navbar.Brand eventkey="disabled" disabled>
        <FontAwesomeIcon className="mr-1" icon={faBook} />
        MyReads
      </Navbar.Brand>
      <Nav.Link as={Link} to="/">
        <Button variant="dark">
          <FontAwesomeIcon className="mr-2" icon={faDatabase} />My Shelves
      </Button>
      </Nav.Link>
      <Nav.Link as={Link} to="/search">
        <Button variant="dark">
          <FontAwesomeIcon className="mr-2" icon={faPlus} />Add New Books
      </Button>
      </Nav.Link>
    </Navbar>
  )
}

export default Header