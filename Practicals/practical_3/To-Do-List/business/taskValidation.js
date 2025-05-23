// business/taskValidation.js
export function validateTask({ title, due_date }) {
    if (!title || title.trim() === '') {
      throw new Error('Task title is required');
    }
    if (!due_date) {
      throw new Error('Due date is required');
    }
    return true;
  }
  