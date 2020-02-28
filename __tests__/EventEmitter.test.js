import EventEmitter from '../src/EventEmitter';

test('check EventEmitter is singltone', () => {
  const ee = new EventEmitter();
  const ee2 = new EventEmitter();

  expect(ee === ee2).toBeTruthy();
});

test('calling listener', () => {
  const ee = new EventEmitter();

  let a = 1;
  ee.on('someEvent', () => {
    a = 2;
  });

  expect(a).toBe(1);
  ee.emit('someEvent');
  expect(a).toBe(2);
});


test('multiple listeners', () => {
  const ee = new EventEmitter();

  let a = 1;
  let b = 1;
  ee.on('someEvent', () => {
    a = 2;
  });
  ee.on('someEvent', () => {
    b = 2;
  });

  expect(a).toBe(1);
  expect(b).toBe(1);
  ee.emit('someEvent');
  expect(a).toBe(2);
  expect(b).toBe(2);
});



