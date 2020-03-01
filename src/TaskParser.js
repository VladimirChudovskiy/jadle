const defaultTask = {
  action: '',
  params: [],
  await: false,
  delayBefore: null,
  delayAfter: null,
  keep: false,
};

const parse = (task) => {
  if (typeof task === 'string') {
    return parseStringTask(task);
  } else {
    return Object.assign({}, defaultTask, task);
  }
};

const parseStringTask = (task) => {
  const parsedTask = Object.assign({}, defaultTask);

  if (task.includes('[await]')) {
    parsedTask.await = true;
    task = task.replace('[await]', '');
  }
  if (task.includes('[keep]')) {
    parsedTask.keep = true;
    task = task.replace('[keep]', '');
  }
  if (task.includes('[delayBefore')) {
    const beforeStart = task.indexOf('[delayBefore');
    const beforeEnd = task.indexOf(']', beforeStart) + 1;
    const beforeStr = task.slice(beforeStart, beforeEnd);
    const beforeParts = beforeStr.split(':');
    task = task.replace(beforeStr, '');
    parsedTask.delayBefore = parseInt(beforeParts[1]);
  }
  if (task.includes('[delayAfter')) {
    const afterStart = task.indexOf('[delayAfter');
    const afterEnd = task.indexOf(']', afterStart) + 1;
    const afterStr = task.slice(afterStart, afterEnd);
    const afterParts = afterStr.split(':');
    task = task.replace(afterStr, '');
    parsedTask.delayAfter = parseInt(afterParts[1]);
  }
  const taskParts = task.split(':');
  parsedTask.action = taskParts[0];
  if (taskParts.length > 1) {
    parsedTask.params = taskParts[1].split(',');
  }
  return parsedTask;
};

export {
  parse,
};