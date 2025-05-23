// presentation/TaskForm.jsx
import { useState } from 'react';
import { taskService } from '../services/taskService';

export default function TaskForm({ onCreated }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handle = async e => {
    e.preventDefault();
    try {
      await taskService.createTask({ title, due_date: dueDate });
      setTitle('');
      setDueDate('');
      onCreated();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handle} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      {' '}
      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
        required
      />
      {' '}
      <button type="submit">Add Task</button>
    </form>
  );
}
