'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registeruser } from '@/lib/api';
import './Register.css'
import Link from 'next/link'

const RegisterPage = () => {
    const router = useRouter()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            let req = { Name: name, Surname: surname, Email: email, Password: password, CustomerId: process.env.NEXT_PUBLIC_CustomerId }
            const response = await registeruser(req);
            if (response.status = 1) {
                router.push('/login')
                alert(`Registration successful!`);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <label>Name</label>
                <input
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label>Surname</label>
                <input
                    type="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                />

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

                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>

                <p style={{ color: "black", textAlign: 'center', marginTop: '16px' }}>Already have an account ? {' '}
                    <Link href='/login' style={{ color: "blue" }}>Login</Link></p>
            </form>

        </div >
    );
};

export default RegisterPage;
