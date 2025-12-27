import React from 'react'

function Home({books, borrowers}) {
    const totalBooks = books.length;
  const borrowedBooks = books.filter(book => book.status === 'borrowed').length;
  const availableBooks = totalBooks - borrowedBooks;
  const totalBorrowers = borrowers.length;
  return (
    <div>
        <h2>Dashboard</h2>
      <p>Welcome to the Library Management System!</p>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ddd', padding: '10px', flex: 1 }}>
          <h3>Total Books</h3>
          <p>{totalBooks}</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '10px', flex: 1 }}>
          <h3>Available Books</h3>
          <p>{availableBooks}</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '10px', flex: 1 }}>
          <h3>Borrowed Books</h3>
          <p>{borrowedBooks}</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '10px', flex: 1 }}>
          <h3>Total Borrowers</h3>
          <p>{totalBorrowers}</p>
        </div>
      </div>
    </div>
  )
}

export default Home