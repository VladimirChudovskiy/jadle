let _instance = null;

class EventEmitter {
  constructor () {
    if ( _instance === null) {
      _instance = this;

      this._events = {};
    }

    return _instance;
  }

  on (event, listener, name) {
    if ( ! this._events.hasOwnProperty(event)) {
      this._events[event] = [];
    }
    const index = this._events[event].findIndex((item) => item.name === name);
    if (index === -1) {
      if (typeof name === 'undefined') {
        name = null;
      }
      this._events[event].push({
        name,
        listener
      });
      return;
    }
    this._events[event][index].listener = listener;
  }

  emit (event) {
    if ( ! this._events.hasOwnProperty(event)) {
      return;
    }
    this._events[event].forEach((item) => {
      item.listener()
    });
  }

  remove (event, name) {
    if ( ! this._events.hasOwnProperty(event)) {
      return;
    }
    const index = this._events[event].findIndex((item) => item.name === name);
    if (index !== -1) {
      this._events[event].splice(index, 1);
    }
  }
};


export default EventEmitter;
