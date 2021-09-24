const storage = {
  getItem() {
    const list = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(list);
    return list;
  },

  setItem(items) {
    localStorage.setItem('tasks', JSON.stringify(items));
  },

  clear() {
    localStorage.clear();
  },
};

export default storage;