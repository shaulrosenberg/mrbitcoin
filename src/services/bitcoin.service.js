import axios from "axios"

export const bitcoinService = {
	getRate,
	getMarketPriceHistory,
	getAvgBlockSize
}

async function getRate() {
	try {
		const response = await axios.get("https://blockchain.info/ticker")
		return response.data
	} catch (error) {
		console.error("Error getting bitcoin rate", error)
		throw error
	}
}

async function getMarketPriceHistory() {
	try {
		const response = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
		return response.data;
	} catch (error) {
		console.error('Error getting market price history', error)
		throw error
	}
}

async function getAvgBlockSize() {
	try {
		const response = await axios.get(
			"https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true"
		)
		return response.data
	} catch (error) {
		console.error("Error getting average block size", error)
		throw error
	}
}
