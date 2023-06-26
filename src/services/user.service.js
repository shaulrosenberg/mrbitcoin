import { utilService } from './util.service.js'

let users = utilService.loadFromStorage('users') || []

let loggedInUser = utilService.loadFromStorage('loggedInUser') || null

export const userService = {
	getUser,
	signup,
	login,
	transferFunds,
	getTransactions,
	getUsers,
	logout
}

function getUser() {
	return loggedInUser
}

function getUsers() {
	return users
}

function signup(username) {
	let newUser = {
		name: username,
		balance: 100,
		transactions: [],
	}
	users.push(newUser)
	utilService.saveToStorage('users', users)
	return login(username)
}

function login(username) {
	let user = users.find(user => user.name === username)
	if (user) {
		loggedInUser = user
		utilService.saveToStorage('loggedInUser', user)
	}
	return user
}

function logout() {
	localStorage.removeItem('loggedInUser')
}

function transferFunds(contactId, amount) {
	loggedInUser.balance -= amount
	let transaction = {
		toId: contactId,
		to: contactId, 
		at: new Date().getTime(),
		amount: amount
	}
	
	loggedInUser.transactions.push(transaction)
	utilService.saveToStorage('loggedInUser', loggedInUser)
	return loggedInUser
}

function getTransactions() {
	return loggedInUser.transactions
}
