let instance = null;
const tasks = [];

class TaskManager {
  constructor() {
    if (instance === null) {
      instance = this;
    }

    return instance;
  }

  get length() {
    return tasks.length;
  }

  add(task) {
    tasks.push(task);
  }

  addMultiple(tasks) {}

  next() {}

  removeAll() {}
    
};

export default TaskManager;