import Parser from '../src/Parser';
import Model from '../src/Model';

test('check Parser isnt singletone', () => {
  const parser = new Parser();
  const parser2 = new Parser();

  expect(parser === parser2).not.toBeTruthy();
});


test('check setting script as json', () => {
  const parser = new Parser();
  let script = JSON.stringify({start: {}});
  parser.setScript(script);

  expect(parser.script).toBe(script);
});

test('check setting script as object', () => {
  const parser = new Parser();
  let script = JSON.stringify({start: {}});
  parser.setScript({start: {}});

  expect(parser.script).toBe(script);
});

test('check setting model', () => {
  const parser = new Parser();
  const model = new Model();
  model.set('name', 'John');
  parser.setModel(model);

  expect(parser.model.get('name')).toBe('John');
});
