function colorLog(message, color) {
  color = color || 'black';
  switch (color) {
    case 'green':
      color = 'Green';
      break;
    case 'blue':
      color = 'DodgerBlue';
      break;
    case 'red':
      color = 'Red';
      break;
    case 'orange':
      color = 'Orange';
      break;
    default:
      color = 'Green';
  }
  console.log(`%c${message}`, `color:${color}`);
}
module.exports = colorLog;
