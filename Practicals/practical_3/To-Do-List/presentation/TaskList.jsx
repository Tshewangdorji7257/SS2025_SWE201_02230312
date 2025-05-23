// presentation/TaskList.jsx
import { useState, useEffect } from 'react';
import { taskService } from '../services/taskService';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDate, setEditDate] = useState('');

  const load = async () => {
    try {
      const data = await taskService.getTasks();
      setTasks(data);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => { load(); }, []);

  const save = async id => {
    try {
      await taskService.updateTask(id, { title: editTitle, due_date: editDate });
      setEditingId(null);
      load();
    } catch (err) {
      alert(err.message);
    }
  };

  const remove = async id => {
    if (!confirm('Delete this task?')) return;
    try {
      await taskService.deleteTask(id);
      load();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <ul>
      {tasks.map(t => (
        <li key={t.id} style={{ marginBottom: 8 }}>
          {editingId === t.id ? (
            <>
              <input
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
              />
              <input
                type="date"
                value={editDate}
                onChange={e => setEditDate(e.target.value)}
              />
              <button onClick={() => save(t.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <strong>{t.title}</strong> — due{' '}
              {new Date(t.due_date).toLocaleDateString()}
              {' '}
              <button onClick={() => {
                setEditingId(t.id);
                setEditTitle(t.title);
                setEditDate(t.due_date.split('T')[0]);
              }}>Edit</button>
              <button onClick={() => remove(t.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
