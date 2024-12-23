'use client'

import { useState } from 'react';
import { loginUser } from '@/lib/api';
import './Login.css'
import Link from 'next/link'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let req = {EMail: email, Password: password, CustomerId: process.env.NEXT_PUBLIC_CustomerId}
      const response = await loginUser(req);
      if (response.status = 1) {
      alert(`Logged in successfully!`);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit} className="login-form">
        <label>Email</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />

        <label>Password</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
        </button>

        <p style={{ color: "black", textAlign: 'center', marginTop: '16px' }}>Don't have an account ? {' '}
        <Link href='/register' style={{ color: "blue" }}>Register</Link></p>
    </form>
</div>
  );
};

export default LoginPage;
