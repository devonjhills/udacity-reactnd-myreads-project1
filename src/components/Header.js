import React from 'react'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-image">
        <img src='b1.png' alt='Bat left' />
      </div>
      <div className="header-text">
        <h1>MyReads: A Book Tracking App</h1>
        <h2>By Devon Hills, for Udacity React Nanodegree Course</h2>
      </div>
      <div className="header-image">
        <img src='b2.png' alt='Bat right' />
      </div>
    </div>
  )
}

export default Header
