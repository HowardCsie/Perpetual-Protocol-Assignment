import BigNumber from 'bignumber.js'

export default class Exchange {
    constructor(Rt, Ru) {
        this.Rt = new BigNumber(Rt)
        this.Ru = new BigNumber(Ru)
    }

    convertUSD2TWD(USD) {
        const x = this.Rt.multipliedBy(this.Ru)
            .div(this.Ru.plus(new BigNumber(USD)))
            .minus(this.Rt)
        this.Rt = this.Rt.plus(x)
        this.Ru = this.Ru.plus(USD)
        return x.negated().toNumber()
    }

    convertTWD2USD(TWD) {
        const y = this.Ru.multipliedBy(this.Rt)
            .div(this.Rt.plus(new BigNumber(TWD)))
            .minus(this.Ru)
        this.Ru = this.Ru.plus(y)
        this.Rt = this.Rt.plus(TWD)
        return y.negated().toNumber()
    }
}
