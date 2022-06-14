export default class Events {
    constructor(listeners = {}) {
        this.listeners = listeners;
    }

    hasListeners(event) {
        return event in this.listeners;
    }

    addListener(event, cb) {
        if (!(event in this.listeners)) {
            this.listeners[event] = [];
        }

        if (!this.listeners[event].includes(cb)) {
            this.listeners[event].push(cb);
        }
    }

    removeListener(event, cb) {
        if (!this.hasListeners(event)) {
            return;
        }

        this.listeners[event] = this.listeners[event].filter(
            (subCb) => subCb !== cb,
        );
    }

    on(events, cb) {
        if (Array.isArray(events)) {
            events.forEach((event) => this.addListener(event, cb));
        } else {
            this.addListener(events, cb);
        }

        return {
            unsubscribe: () => this.off(events, cb),
        };
    }

    off(events, cb) {
        if (Array.isArray(events)) {
            events.forEach((event) => this.removeListener(event, cb));
        }

        this.removeListener(events, cb);
    }

    removeAll(event) {
        this.listeners[event] = [];
    }

    emit(event, ...args) {
        if (!this.hasListeners(event)) {
            return;
        }

        this.listeners[event].forEach(function (cb) {
            cb.call(null, ...args, event);
        });
    }
}
