import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchBar = ({ query, handleQuery }) => {
  return (
    <Container>
      <InputGroup className="mb-5">
        <InputGroup.Prepend>
          <Link to='/'>
            <Button
              variant="dark"
              title="Return Home">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </Link>
        </InputGroup.Prepend>
        <FormControl
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={(event) => handleQuery(event.target.value)}
        />
      </InputGroup>
    </Container>
  )
}

export default SearchBar
