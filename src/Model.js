const UPDATE_EVENT_NAME = 'modelUpdated';

class Model {
  constructor() {
    this.data = {};
    this.events = {};
  }

  set(name, value) {
    const prevValue = this.data[name];
    this.data[name] = value;
    if (UPDATE_EVENT_NAME in this.events) {
      this.events.modelUpdated(UPDATE_EVENT_NAME, {
        prop: name,
        prev: prevValue,
        current: value,
      });
    }
  }

  get(name) {
    return this.data[name];
  }

  addListener(name, listener) {
    this.events[name] = listener;
  }

  removeListener(name) {
    delete this.events[name];
  }
}

export default Model;
