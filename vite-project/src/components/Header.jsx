import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
      <h1>Library Management System</h1>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/books" style={{ marginRight: '10px' }}>Books</Link>
        <Link to="/add-book" style={{ marginRight: '10px' }}>Add Book</Link>
        <Link to="/borrowers" style={{ marginRight: '10px' }}>Borrowers</Link>
      </nav>
    </header>

  )
}

export default Header