let _instance = null;
const _events = {};

class EventEmitter {
  constructor() {
    if ( _instance === null) {
      _instance = this;
    }

    return _instance;
  }

  on(event, listener, name) {
    if ( ! _events.hasOwnProperty(event)) {
      _events[event] = [];
    }
    const index = _events[event].findIndex((item) => item.name === name);
    if (index === -1) {
      if (typeof name === 'undefined') {
        name = null;
      }
      _events[event].push({
        name,
        listener
      });
      return;
    }
    _events[event][index].listener = listener;
  }

  emit(event, data) {
    if ( ! event in _events) {
      return;
    }
    _events[event].forEach((item) => {
      item.listener(data)
    });
  }

  remove(event, name) {
    if ( ! event in _events) {
      return;
    }
    const index = _events[event].findIndex((item) => item.name === name);
    if (index !== -1) {
      _events[event].splice(index, 1);
    }
  }
};


export default EventEmitter;
