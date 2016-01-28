const events = require('events');
const EventEmitter = events.EventEmitter;


const chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', (message) => {
  chatlog.push(message);
});

chat.on('join', (nickname) => {
  users.push(nickname);
});
chat.emit('join','nickname');
chat.emit('message','message');
