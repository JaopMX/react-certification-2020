import React, { useState } from 'react';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  function authenticate(event) {
    event.preventDefault();
    login(user, password);
  }

  return (
    <section className="login">
      <h1>Welcome back!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>Username </strong>
            <input
              required
              type="text"
              id="username"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
