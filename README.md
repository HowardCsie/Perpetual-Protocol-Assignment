# Perpetual-Protocol-Assignment

# Requirement

Node.js 14 is required.
```
nvm install 14
nvm use 14
```

# Steps

1. `npm install pnpm -g`
2. `pnpm install`
3. `pnpm dev`
4. View `http://localhost:3000/` via browser

# How to use the UI ?

1. Initialize reserved TWD & USD at top and click `Go` to setup.
2. Choose to convert TWD or USD, then click `Convert`.
3. The result and history are placed below.

![screencapture-localhost-3000-2022-02-24-00_23_45](https://user-images.githubusercontent.com/17197816/155362640-455d9b37-9bf5-4307-8d23-80c446080413.png)

# How to use Exchnge Class ?

```js
import Exchange from './exchange.js'
const exchange = new Exchange(10000, 1000)
const USD = exchange.convertTWD2USD(6000) // USD equals to 375
```

# Test

1. run `pnpm test`
