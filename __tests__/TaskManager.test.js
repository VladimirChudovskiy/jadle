import TaskManager from '../src/TaskManager';

test('check TaskManager shouldnt be singletone', () => {
  const tm = new TaskManager();
  const tm2 = new TaskManager();

  expect(tm === tm2).not.toBeTruthy();
});

test('add task', () => {
  const tm = new TaskManager();

  expect(tm.length).toBe(0);
  tm.add('action1:param1');
  expect(tm.length).toBe(1);
  tm.add('action1:param1');
  expect(tm.length).toBe(2);
  tm.removeAll();
});

test('removeAll tasks', () => {
  const tm = new TaskManager();

  expect(tm.length).toBe(0);
  tm.add('action1:param1');
  expect(tm.length).toBe(1);
  tm.removeAll();
  expect(tm.length).toBe(0);
});

test('add multiple task', () => {
  const tm = new TaskManager();

  expect(tm.length).toBe(0);

  tm.addMultiple([
    'action1:param1',
    'action2:param2',
    'action3:param3',
  ]);

  expect(tm.length).toBe(3);
  tm.removeAll();
});

test('get next task', () => {
  const tm = new TaskManager();

  expect(tm.length).toBe(0);
  tm.add('action1:param1');
  tm.add('action2:param2');
  const expected1 = {
    action: 'action1',
    params: ['param1'],
    await: false,
    delayBefore: null,
    delayAfter: null,
    keep: false,
  };
  const expected2 = {
    action: 'action2',
    params: ['param2'],
    await: false,
    delayBefore: null,
    delayAfter: null,
    keep: false,
  };
  const task1 = tm.getNext();
  expect(tm.length).toBe(1);
  expect(task1).toEqual(expected1);
  const task2 = tm.getNext();
  expect(tm.length).toBe(0);
  expect(task2).toEqual(expected2);
  const task3 = tm.getNext();
  expect(task3).toBeNull();
  tm.removeAll();
});
