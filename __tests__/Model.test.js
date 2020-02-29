import Model from '../src/Model'
import EventEmitter from '../src/EventEmitter';

test('check Model is singltone', () => {
  const model = new Model();
  const model2 = new Model();

  expect(model === model2).toBeTruthy();
});

test('check set and get model', () => {
  const model = new Model();

  model.set('name', 'John')

  expect(model.get('name')).toBe('John');
});

test('update model value', () => {
  const model = new Model();

  model.set('name', 'John')
  expect(model.get('name')).toBe('John');
  model.set('name', 'Julia')
  expect(model.get('name')).toBe('Julia');
});

test('update model emitter', () => {
  const model = new Model();
  const ee = new EventEmitter();
  let a = 1;
  let b = 2;
  ee.on('modelUpdated', (data) => {
    a++;
    b = data.current;
  });

  model.set('name', 'John');
  model.addListener('modelUpdated', ee.emit);
  model.set('name', 'Fred');
  expect(a).toBe(2);
  expect(b).toBe('Fred');
});

test('update model emitter multiple listeners', () => {
  const model = new Model();
  model.removeListener('modelUpdated');
  const ee = new EventEmitter();
  let prev = null;
  let current = null;
  let prop = null;
  let c = 1;

  ee.on('modelUpdated', (data) => {c++;});
  ee.on('modelUpdated', (data) => {prev = data.prev;});
  ee.on('modelUpdated', (data) => {current = data.current;});
  ee.on('modelUpdated', (data) => {prop = data.prop;});

  model.set('role', 'guest');
  model.addListener('modelUpdated', ee.emit);
  model.set('role', 'admin');
  expect(c).toBe(2);
  expect(prev).toBe('guest');
  expect(current).toBe('admin');
  expect(prop).toBe('role');
});

test('remove listener', () => {
  const model = new Model();
  const ee = new EventEmitter();
  model.removeListener('modelUpdated');

  let i = 1;
  ee.on('modelUpdated', (data) => {i++});
  model.addListener('modelUpdated', ee.emit);

  model.set('name', 'Hue');
  model.set('name', 'Lilu');

  expect(i).toBe(3);

  model.removeListener('modelUpdated');

  model.set('name', 'Bob');
  expect(i).toBe(3);
});



