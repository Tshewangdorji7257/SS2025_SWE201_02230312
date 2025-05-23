import { supabase } from '../lib/supabase';

export const taskRepository = {
  async createTask(task) {
    const { data, error } = await supabase.from('tasks').insert([task]);
    if (error) throw error;
    return data;
  },

  async getTasks(userId) {
    const { data, error } = await supabase.from('tasks').select('*').eq('user_id', userId);
    if (error) throw error;
    return data;
  },

  async updateTask(taskId, updatedTask) {
    const { data, error } = await supabase.from('tasks').update(updatedTask).eq('id', taskId);
    if (error) throw error;
    return data;
  },

  async deleteTask(taskId) {
    const { data, error } = await supabase.from('tasks').delete().eq('id', taskId);
    if (error) throw error;
    return data;
  }
};
