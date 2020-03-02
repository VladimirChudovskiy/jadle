let instance = null;
const data = {};
const events = {};

const UPDATE_EVENT_NAME = 'modelUpdated';

class Model {
  constructor() {
    if (instance === null) {
      instance = this;
    }

    return instance;
  }

  set(name, value) {
    const prevValue = data[name];
    data[name] = value;
    if (UPDATE_EVENT_NAME in events) {
      events.modelUpdated(UPDATE_EVENT_NAME, {
        prop: name,
        prev: prevValue,
        current: value,
      });
    }
  }

  get(name) {
    return data[name];
  }

  addListener(name, listener) {
    events[name] = listener;
  }

  removeListener(name) {
    delete events[name];
  }
}


export default Model;
