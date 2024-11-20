import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithGooglePopup, createUserDocFromAuth } from './firebase'; // Import Firebase functions
import { useAuth } from './Authentication'; // Your existing auth context
import './Login.css';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Handle Email/Password Login
    async function handlecheck(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(email.current.value, password.current.value);
            navigate('/web');
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    }

    // Handle Google Sign-In
    async function handleGoogleSignIn() {
        try {
            setError('');
            setLoading(true);
            const { user } = await signInWithGooglePopup();
            await createUserDocFromAuth(user); // Save user data in Firestore
            navigate('/web');
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    }

    return (
        <div className="body1">
            <div className="login">
                <h1>Log IN</h1>
                {error && <div className="alert">{error}</div>}
                <form onSubmit={handlecheck}>
                    <label>Email:
                        <input className="Akshit" type="email" ref={email} required />
                    </label>
                    <label>Password:
                        <input className="Akshit" type="password" ref={password} required />
                    </label>
                    <button disabled={loading} className="button" type="submit">
                        LOGIN
                    </button>
                </form>
                <button
                    disabled={loading}
                    className="button google-button"
                    onClick={handleGoogleSignIn}
                >
                    Sign in with Google
                </button>
            </div>
            <div className="account">
                Create an Account? <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
}
