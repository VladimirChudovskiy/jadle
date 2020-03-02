import { parse } from './TaskParser';

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
    tasks.push(parse(task));
  }

  addMultiple(items) {
    items.forEach((task) => this.add(task));
  }

  getNext() {
    if (tasks.length === 0) {
      return null;
    }
    return tasks.shift();
  }

  removeAll() {
    tasks.length = 0;
  }
}

export default TaskManager;
