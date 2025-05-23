// App.tsx
import { useState, useEffect } from 'react';
import AuthPage from './presentation/AuthPage';
import Home     from './presentation/Home';
import { authService } from './services/authService';

export default function App() {
  const [user, setUser] = useState(null);

  const check = async () => {
    try {
      const u = await authService.getUser();
      setUser(u);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    check();
    // also respond to Supabase auth state changes if needed
  }, []);

  return user
    ? <Home onSignOut={() => setUser(null)} />
    : <AuthPage onAuthSuccess={check} />;
}
