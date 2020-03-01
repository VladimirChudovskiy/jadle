import TaskManager from '../src/TaskManager';

test('check TaskManager is singltone', () => {
  const tm = new TaskManager();
  const tm2 = new TaskManager();

  expect(tm === tm2).toBeTruthy();
});

test('add task', () => {
  const tm = new TaskManager();
  
  expect(tm.length).toBe(0);

  tm.add('showScreen:left');

  expect(tm.length).toBe(1);
});