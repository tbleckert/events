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

test('Can listen to multiple events', (t) => {
    const eventManager = new Events();
    const cb = {};
    let cbCalled = 0;

    eventManager.on(['foo', 'bar'], (input, event) => {
        cb[event] = input;
        cbCalled += 1;
    });

    eventManager.emit('foo', 1);
    eventManager.emit('bar', 2);

    t.is(cbCalled, 2);
    t.is(cb.foo, 1);
    t.is(cb.bar, 2);
});
