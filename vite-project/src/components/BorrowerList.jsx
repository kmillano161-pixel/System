import React from 'react'

function BorrowerList({borrowers, onAddBorrower}) {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onAddBorrower({ id: Date.now(), name, email });
      setName('');
      setEmail('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Borrowers</h2>
      <ul>
        {borrowers.map((borrower) => (
          <li key={borrower.id}>{borrower.name} ({borrower.email})</li>
        ))}
      </ul>
      <h3>Add Borrower</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add Borrower</button>
      </form>
    </div>

  )
}

export default BorrowerList