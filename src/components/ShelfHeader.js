import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const ShelfHeader = (props) => {
  return (
    <h2 className="my-h1 text-center">
      <FontAwesomeIcon className="mr-1" icon={faBookOpen} /> {props.heading}
    </h2>
  )
}

export default ShelfHeader