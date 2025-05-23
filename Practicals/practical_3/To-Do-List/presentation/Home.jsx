// presentation/Home.jsx
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { authService } from '../services/authService';

export default function Home({ onSignOut }) {
  const handleLogout = async () => {
    await authService.signOut();
    onSignOut();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <hr/>
      <TaskForm onCreated={() => window.location.reload()} />
      <TaskList />
    </div>
  );
}
