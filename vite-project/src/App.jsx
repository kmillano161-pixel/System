

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import Home from './components/Home';
import Addbook from './components/Addbook';
import BookList from './components/BookList';
import BorrowerList from './components/BorrowerList';
import './App.css'

function App() {
  

  // Initialize data with localStorage (shared across all pages)
  const [books, setBooks] = useLocalStorage('books', []);
  const [borrowers, setBorrowers] = useLocalStorage('borrowers', []);

  // Add a new book
  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  // Add a new borrower
  const addBorrower = (newBorrower) => {
    setBorrowers([...borrowers, newBorrower]);
  };
// Update a book's status (for borrowing/returning)
  const updateBook = (bookId, updates) => {
    setBooks(books.map(book => book.id === bookId ? { ...book, ...updates } : book));
  };

  return (
    <>
    <Router>
      <div style={{padding: '20px'}}>
        <Header />
      
      <Routes>
        <Route path='/' element={<Home books={books} borrowers={borrowers}/>}/>
        <Route path='/add-book' element={<Addbook onAddBook={addBook} />}/>
        <Route path="/books" element={<BookList books={books} borrowers={borrowers} onUpdateBook={updateBook} />} />
        <Route path="/borrowers" element={<BorrowerList borrowers={borrowers} onAddBorrower={addBorrower} />} />
      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
