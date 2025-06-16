import { EventEmitter } from 'events';

//great for building event-driven applications
// can be used to create custom events
// listen for events and respond to them

const eventEmitter = new EventEmitter();
// Register an event listener
eventEmitter.on('eventName', (data) => {
    console.log('Event triggered:', data);
});

// Emit the event
eventEmitter.emit('eventName', { message: 'Hello, World!' });

//handle error
eventEmitter.on('error', (err) => {
    console.error('Error occurred:', err);
});

// Emit an error event
eventEmitter.emit('error', new Error('Something went wrong!'));
