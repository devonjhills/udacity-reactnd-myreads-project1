import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookReader, faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar fixed='top' bg="dark" variant="dark" >
      <Navbar.Brand eventkey="disabled" disabled>
        <FontAwesomeIcon className="mr-1" icon={faBook} />
        MyReads
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/">
          <FontAwesomeIcon className="mr-1" icon={faBookReader} />My Shelves
        </Nav.Link>
        <Nav.Link as={Link} to="/search">
          <FontAwesomeIcon className="mr-1" icon={faPlus} />Add New Books
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header