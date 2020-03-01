import { parse } from '../src/TaskParser';

test('parse string common', () => {
  const task = parse('actionName');

  const expected = {
    action: 'actionName',
    params: [],
    await: false,
    delayBefore: null,
    delayAfter: null,
    keep: false,
  };

  expect(task).toStrictEqual(expected);
});

test('parse string complicated', () => {
  const task = parse('[await][keep][delayBefore:2]actionName:param1,param2');

  const expected = {
    action: 'actionName',
    params: ['param1', 'param2'],
    await: true,
    delayBefore: 2,
    delayAfter: null,
    keep: true,
  };

  expect(task).toStrictEqual(expected);
});

test('parse object task common', () => {
  const task = parse({
    action: 'actionName',
    params: ['a','b'],
  });

  const expected = {
    action: 'actionName',
    params: ['a','b'],
    await: false,
    delayBefore: null,
    delayAfter: null,
    keep: false,
  };

  expect(task).toStrictEqual(expected);
});