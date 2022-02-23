import Exchange from './exchange.js'
const exchange = new Exchange(10000, 1000)

test('convert 6000 TWD to USD', () => {
    expect(exchange.convertTWD2USD(6000)).toBe(375)
})

test('convert 375 USD to TWD', () => {
    expect(exchange.convertUSD2TWD(375)).toBe(6000)
})

test('convert 10000 TWD to USD', () => {
    expect(exchange.convertTWD2USD(10000)).toBe(500)
})

test('convert 10000 TWD to USD', () => {
    expect(exchange.convertTWD2USD(10000)).toBe(166.66666666666666)
})

test('convert 10000 TWD to USD', () => {
    expect(exchange.convertTWD2USD(10000)).toBe(83.33333333333333)
})

test('convert 10000 TWD to USD', () => {
    expect(exchange.convertTWD2USD(10000)).toBe(50)
})

test('convert 800 USD to TWD', () => {
    expect(exchange.convertUSD2TWD(800)).toBe(40000)
})
