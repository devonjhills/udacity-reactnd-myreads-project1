import React from 'react'

const ShelfHeader = (props) => {
  return (
    <h2 className="bookshelf-title">{props.heading}</h2>
  )
}

export default ShelfHeader