import test from 'ava';
import Events from './index.js';

test('Can listen to events', (t) => {
    const eventManager = new Events();
    let eventInput = null;

    eventManager.on('test', (input) => {
        eventInput = input;
    });

    eventManager.emit('test', 'foo');

    t.is(eventInput, 'foo');
});

test('Can unsubscribe listeners', (t) => {
    const eventManager = new Events();
    let eventInput = null;
    const cb = (input) => {
        eventInput = input;
    };

    eventManager.on('test', cb);
    eventManager.off('test', cb);

    eventManager.emit('test', 'foo');

    t.is(eventInput, null);
});

test('Can unsubscribe all listeners', (t) => {
    const eventManager = new Events();
    let eventInput = null;

    eventManager.on('test', (input) => {
        eventInput = input;
    });

    eventManager.removeAll('test');

    eventManager.emit('test', 'foo');

    t.is(eventInput, null);
});
