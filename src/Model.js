let instance = null;
const data = {};
const events = {};

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
    if ('modelUpdated' in events) {
      events.modelUpdated('modelUpdated', {
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
