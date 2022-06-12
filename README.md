<h1 align="center">Events</h1>
<p align="center">Simple event manager</p>

## Usage

```javascript
import Events from '@bleckert/events';

const events = new Events();

events.on('test', console.log);
events.emit('test', 'foo', 'bar');
```
