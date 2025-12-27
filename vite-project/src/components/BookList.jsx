import React from 'react'

function BookList({books, borrowers, onUpdateBook }) {
    const handleBorrow = (bookId, borrowerId) => {
    const borrower = borrowers.find(b => b.id === borrowerId);
    onUpdateBook(bookId, { status: 'borrowed', borrower: borrower.name, borrowDate: new Date().toISOString() });
  };

  const handleReturn = (bookId) => {
    onUpdateBook(bookId, { status: 'available', borrower: null, borrowDate: null });
  };

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}> {/* Allows horizontal scroll on small screens */}
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Author</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Genre</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Borrower</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Borrow Date</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.title}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.author}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.genre}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.status}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{book.borrower || 'N/A'}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {book.borrowDate ? new Date(book.borrowDate).toLocaleDateString() : 'N/A'}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {book.status === 'available' ? (
                      <select onChange={(e) => handleBorrow(book.id, parseInt(e.target.value))}>
                        <option value="">Select Borrower</option>
                        {borrowers.map((borrower) => (
                          <option key={borrower.id} value={borrower.id}>{borrower.name}</option>
                        ))}
                      </select>
                    ) : (
                      <button onClick={() => handleReturn(book.id)}>Return Book</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
    </div>

  )
  
}

export default BookList