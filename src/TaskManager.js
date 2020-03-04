import { parse } from './TaskParser';

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  get length() {
    return this.tasks.length;
  }

  add(task) {
    this.tasks.push(parse(task));
  }

  addMultiple(items) {
    items.forEach((task) => this.add(task));
  }

  getNext() {
    if (this.tasks.length === 0) {
      return null;
    }
    return this.tasks.shift();
  }

  removeAll() {
    this.tasks.length = 0;
  }
}

export default TaskManager;
