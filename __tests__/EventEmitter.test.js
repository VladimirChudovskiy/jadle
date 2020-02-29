import EventEmitter from '../src/EventEmitter';

test('check EventEmitter is singltone', () => {
  const ee = new EventEmitter();
  const ee2 = new EventEmitter();

  expect(ee === ee2).toBeTruthy();
});

test('calling listener', () => {
  const ee = new EventEmitter();

  let a = 1;
  ee.on('event1', () => {
    a = 2;
  });

  expect(a).toBe(1);
  ee.emit('event1');
  expect(a).toBe(2);
});


test('multiple listeners', () => {
  const ee = new EventEmitter();

  let a = 1;
  let b = 1;
  ee.on('event2', () => {
    a = 2;
  });
  ee.on('event2', () => {
    b = 2;
  });

  expect(a).toBe(1);
  expect(b).toBe(1);
  ee.emit('event2');
  expect(a).toBe(2);
  expect(b).toBe(2);
});

test('remove listener', () => {
  const ee = new EventEmitter();
  let a = 1;
  ee.on('event3', () => { a++ }, 'increment');
  ee.emit('event3');
  expect(a).toEqual(2);
  ee.remove('event3', 'increment');
  ee.emit('event3');
  expect(a).toEqual(2);
});

test('pass param into event emitter', () => {
  const ee = new EventEmitter();

  let a = 1;
  ee.on('event4', (data) => {
    a = data;
  });

  expect(a).toBe(1);
  ee.emit('event4', 5);
  expect(a).toBe(5);
});


