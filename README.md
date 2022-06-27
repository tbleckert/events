<h1 align="center">
  Simple event manager
</h1>

<h6 align="center">
  <a href="https://github.com/tbleckert/events#install">Install</a>
  ·
  <a href="https://github.com/tbleckert/events#usage">Usage</a>
</h6>

<p align="center">
    <a href="https://www.npmjs.com/package/@bleckert/events">
        <img src="https://img.shields.io/npm/v/@bleckert/events?style=for-the-badge" alt="NPM" />
    </a>
    <a href="https://bundlephobia.com/result?p=@bleckert/events">
        <img src="https://img.shields.io/bundlephobia/minzip/@bleckert/events?style=for-the-badge" />
    </a>
    <a href="https://github.com/sponsors/tbleckert">
        <img src="https://img.shields.io/badge/GitHub-donate-yellow?style=for-the-badge" />
    </a>
</p>

## Install

`npm i @bleckert/events` or `yarn add @bleckert/events`

## Usage

```javascript
import Events from '@bleckert/events';

const events = new Events();

events.on('test', console.log);
events.emit('test', 'foo', 'bar');
```
