import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=1')
      .then(response => response.json())
      .then(data => {
        const initialUsers = data.map(u => ({ name: u.name, email: u.email }));
        setUsers(initialUsers);
      })
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required');
      setSuccess(false);
      return;
    }
    
    if (!formData.email.includes('@')) {
      setError('Invalid email format');
      setSuccess(false);
      return;
    }

    setError('');
    setSuccess(true);
    setUsers([...users, { name: formData.name, email: formData.email }]);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          
          {error && <p className="error-msg">{error}</p>}
          
          <button type="submit">Register</button>
        </form>

        {success && <p className="success-msg">Registration Successful!</p>}

        {users.length > 0 && (
          <div className="users-list">
            <h3>Registered Users</h3>
            <ul>
              {users.map((user, index) => (
                <li key={index}>{user.name} - {user.email}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;