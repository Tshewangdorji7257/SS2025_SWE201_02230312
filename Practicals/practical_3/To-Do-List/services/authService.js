// services/authService.js
import { supabase } from '../lib/supabase';

export const authService = {
  async signUp(email, password) {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw new Error(error.message);
  },

  async signIn(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
  },

  async getUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw new Error(error.message);
    return user;
  }
};
