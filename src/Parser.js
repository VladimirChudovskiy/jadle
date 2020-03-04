class Parser {
  constructor() {
    this.model = null;
    this.script = null;
  }

  setScript(script) {
    if (typeof script === 'string') {
      this.script = script;
    } else {
      this.script = JSON.stringify(script);
    }
  }

  setModel(model) {
    this.model = model;
  }

  checkConditions() {}

  handleState() {}

  changeState() {}

  updateConditions() {}

  destroy() {}
}

export default Parser;
