import React from 'react'
import { useState } from 'react';


function Addbook({onAddBook}) {
    const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      onAddBook({ id: Date.now(), title, author, genre, status: 'available', borrower: null, borrowDate: null });
      setTitle('');
      setAuthor('');
      setGenre('');
    }
  };
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default Addbook