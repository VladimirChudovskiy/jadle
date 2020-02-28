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
      this._events[event].push({
        name: null,
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
};


export default EventEmitter;
