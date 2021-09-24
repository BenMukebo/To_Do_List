const storage = {
  getItem() {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  },

  setItem(items) {
    localStorage.setItem('tasks', JSON.stringify(items));
  },

  clear() {
    localStorage.clear();
  },
};

export default storage;