<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Exchange from './exchange.js'
import dayjs from 'dayjs'
import { ref, reactive } from 'vue'
const initTWD = ref(null)
const initUSD = ref(null)
const TWD = ref(null)
const USD = ref(null)
let exchange = null
const records = reactive([])
const initializeExchange = () => {
    records.splice(0)
    records.push({
        date: new Date(),
        TWD: null,
        USD: null,
        reservedTWD: initTWD.value,
        reservedUSD: initUSD.value,
    })
    exchange = new Exchange(initTWD.value, initUSD.value)
}
const convertUSD2TWD = (USD) => {
    console.log(USD)
    const TWD = -exchange.convertUSD2TWD(USD)
    records.push({
        date: new Date(),
        TWD,
        USD,
        reservedTWD: exchange.Rt.toNumber(),
        reservedUSD: exchange.Ru.toNumber(),
    })
}
const convertTWD2USD = (TWD) => {
    console.log(TWD)
    const USD = -exchange.convertTWD2USD(TWD)
    records.push({
        date: new Date(),
        TWD,
        USD,
        reservedTWD: exchange.Rt.toNumber(),
        reservedUSD: exchange.Ru.toNumber(),
    })
}
</script>

<template>
    <div
        class="min-w-screen min-h-screen flex flex-col bg-cover bg-no-repeat bg-fixed bg-center p-10 gap-5"
        style="
            background-image: url('https://dl.airtable.com/.attachments/650c41fd7f78e5de44c461437b16db16/a68941b1/wall01.png');
        "
    >
        <div class="card">
            <h3>Initialize reserved TWD & USD</h3>
            <div class="flex items-center gap-4">
                TWD<input v-model="initTWD" type="number" /> USD<input
                    v-model="initUSD"
                    type="number"
                />
                <button @click="initializeExchange">Go</button>
            </div>
        </div>
        <div class="flex flex-wrap gap-5">
            <div class="card flex-grow">
                <h3>Convert TWD to USD</h3>
                <div class="flex items-center gap-4">
                    TWD<input v-model="TWD" type="number" />
                    <button @click="convertTWD2USD(TWD)">Convert</button>
                </div>
            </div>
            <div class="card flex-grow">
                <h3>Convert USD to TWD</h3>
                <div class="flex items-center gap-4">
                    USD<input v-model="USD" type="number" />
                    <button @click="convertUSD2TWD(USD)">Convert</button>
                </div>
            </div>
        </div>
        <div class="card flex-grow">
            <h3>History</h3>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>TWD</th>
                        <th>USD</th>
                        <th>Reserved TWD</th>
                        <th>Reserved USD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(record, index) in records" :key="record.date">
                        <td>{{ index + 1 }}</td>
                        <td>
                            {{
                                dayjs(record.date).format('YYYY/mm/DD HH:mm:ss')
                            }}
                        </td>
                        <td>{{ record.TWD }}</td>
                        <td>{{ record.USD }}</td>
                        <td>{{ record.reservedTWD }}</td>
                        <td>{{ record.reservedUSD }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- <template v-if="exchange">
        <div>TWD: {{ exchange.Rt.toString() }}</div>
        <div>USD: {{ exchange.Ru.toString() }}</div>
    </template> -->
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.card {
    @apply bg-white border-2 border-black p-10 rounded flex flex-col gap-4;
    h3 {
        @apply text-24px font-bold text-left;
    }
    button {
        @apply w-96px p-8px font-bold text-14px rounded-md bg-hex-3CEBAB;
    }
    input {
        @apply bg-black bg-opacity-4 h-28px rounded-md px-2;
    }
    th,
    td {
        @apply text-left leading-relaxed h-2;
    }
}
</style>
