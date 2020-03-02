let instance = null;
const events = {};

class EventEmitter {
  constructor() {
    if (instance === null) {
      instance = this;
    }

    return instance;
  }

  on(event, listener, name) {
    let listenerName = name;
    if (!(event in events)) {
      events[event] = [];
    }
    const index = events[event].findIndex((item) => item.name === listenerName);
    if (index === -1) {
      if (typeof listenerName === 'undefined') {
        listenerName = null;
      }
      events[event].push({
        name: listenerName,
        listener,
      });
      return;
    }
    events[event][index].listener = listener;
  }

  emit(event, data) {
    if (!(event in events)) {
      return;
    }
    events[event].forEach((item) => {
      item.listener(data);
    });
  }

  remove(event, name) {
    if (!(event in events)) {
      return;
    }
    const index = events[event].findIndex((item) => item.name === name);
    if (index !== -1) {
      events[event].splice(index, 1);
    }
  }
}


export default EventEmitter;
