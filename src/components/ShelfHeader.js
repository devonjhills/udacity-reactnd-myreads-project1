import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const ShelfHeader = (props) => {
  return (
    <h3 className="shelf-name">
      {props.heading}
      <FontAwesomeIcon className="ml-2" icon={faBookOpen} />
    </h3>
  )
}

export default ShelfHeader