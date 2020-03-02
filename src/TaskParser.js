const defaultTask = {
  action: '',
  params: [],
  await: false,
  delayBefore: null,
  delayAfter: null,
  keep: false,
};

const parseStringTask = (task) => {
  let currentTask = task;
  const parsedTask = { ...defaultTask };

  if (task.includes('[await]')) {
    parsedTask.await = true;
    currentTask = currentTask.replace('[await]', '');
  }
  if (currentTask.includes('[keep]')) {
    parsedTask.keep = true;
    currentTask = currentTask.replace('[keep]', '');
  }
  if (currentTask.includes('[delayBefore')) {
    const beforeStart = currentTask.indexOf('[delayBefore');
    const beforeEnd = currentTask.indexOf(']', beforeStart) + 1;
    const beforeStr = currentTask.slice(beforeStart, beforeEnd);
    const beforeParts = beforeStr.split(':');
    currentTask = currentTask.replace(beforeStr, '');
    parsedTask.delayBefore = parseInt(beforeParts[1], 10);
  }
  if (currentTask.includes('[delayAfter')) {
    const afterStart = currentTask.indexOf('[delayAfter');
    const afterEnd = currentTask.indexOf(']', afterStart) + 1;
    const afterStr = currentTask.slice(afterStart, afterEnd);
    const afterParts = afterStr.split(':');
    currentTask = currentTask.replace(afterStr, '');
    parsedTask.delayAfter = parseInt(afterParts[1], 10);
  }
  const taskParts = currentTask.split(':');
  [parsedTask.action] = taskParts;
  if (taskParts.length > 1) {
    parsedTask.params = taskParts[1].split(',');
  }
  return parsedTask;
};

const parse = (task) => {
  if (typeof task === 'string') {
    return parseStringTask(task);
  }
  return { ...defaultTask, ...task };
};

export {
  parse,
  parseStringTask,
};
