import axios from "axios"
import { utilService } from "./util.service"

export const bitcoinService = {
	getRate,
	getMarketPriceHistory,
	getAvgBlockSize
}

async function getRate() {
	try {
		const storageKey = 'bitcoinRate'
		let data = utilService.loadFromStorage(storageKey)

		if (!data) {
			const response = await axios.get("https://blockchain.info/ticker")
			data = response.data;
			utilService.saveToStorage(storageKey, data)
		}

		return data
	} catch (error) {
		console.error("Error getting bitcoin rate", error)
		throw error
	}
}

async function getMarketPriceHistory() {
	try {
		const storageKey = 'marketPriceHistory'
		let data = utilService.loadFromStorage(storageKey)

		if (!data) {
			const response = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
			data = response.data
			utilService.saveToStorage(storageKey, data)
		}

		return data;
	} catch (error) {
		console.error('Error getting market price history', error)
		throw error
	}
}

async function getAvgBlockSize() {
	try {
		const storageKey = 'avgBlockSize'
		let data = utilService.loadFromStorage(storageKey)

		if (!data) {
			const response = await axios.get("https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true")
			data = response.data
			utilService.saveToStorage(storageKey, data)
		}

		return data
	} catch (error) {
		console.error("Error getting average block size", error)
		throw error
	}
}
