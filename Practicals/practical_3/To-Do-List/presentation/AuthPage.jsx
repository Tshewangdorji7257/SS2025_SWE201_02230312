// presentation/AuthPage.jsx
import { useState } from 'react';
import { authService } from '../services/authService';

export default function AuthPage({ onAuthSuccess }) {
  const [mode, setMode] = useState('login'); // or 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (mode === 'login') {
        await authService.signIn(email, password);
      } else {
        await authService.signUp(email, password);
      }
      onAuthSuccess();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{mode === 'login' ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br/>
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        /><br/>
        <button type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
        {mode === 'login'
          ? "Don't have an account? Sign Up"
          : 'Already have an account? Login'}
      </button>
    </div>
  );
}
