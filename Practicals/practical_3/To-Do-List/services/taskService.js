// services/taskService.js
import { supabase } from '../lib/supabase';
import { authService } from './authService';
import { validateTask } from '../business/taskValidation';

// --- Helper to ensure user is logged in ---
async function authCheck() {
  const user = await authService.getUser();
  if (!user) throw new Error('User not authenticated');
  return { user };
}

export const taskService = {
  async createTask({ title, due_date }) {
    const { user } = await authCheck(); // authCheck now defined above
    validateTask({ title, due_date });

    const { data, error } = await supabase
      .from('tasks')
      .insert([{ 
        title, 
        due_date, 
        user_id: user.id 
      }])
      .select(); // <--- Added select to fetch inserted data

    if (error) {
      console.error('CreateTask Error:', error.message);
      throw new Error(error.message || 'Could not create task');
    }

    return data;
  },

  async getTasks() {
    const { user } = await authCheck();
    
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('GetTasks Error:', error.message);
      throw new Error(error.message || 'Could not fetch tasks');
    }

    return data;
  },

  async updateTask(id, { title, due_date }) {
    const { user } = await authCheck();
    validateTask({ title, due_date });

    const { data, error } = await supabase
      .from('tasks')
      .update({ title, due_date })
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      console.error('UpdateTask Error:', error.message);
      throw new Error(error.message || 'Could not update task');
    }

    return data;
  },

  async deleteTask(id) {
    const { user } = await authCheck();

    const { data, error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      console.error('DeleteTask Error:', error.message);
      throw new Error(error.message || 'Could not delete task');
    }

    return data;
  }
};
