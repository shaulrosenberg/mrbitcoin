import { userService } from "@/services/user.service.js"

export default {
    state: {
        user: userService.getUser(),
        userMsg: null
    },
    mutations: {
        setUser(state, { user }) {
            console.log('setUser: ', user)
            state.user = Object.assign({}, user)
        },
        logout(state) {
            state.user = null
        },
        setUserMsg(state, { userMsg }) {
            state.userMsg = userMsg
        }
    },
    actions: {
        async signup({ commit }, { username }) {
            const user = await userService.signup(username)
            commit({ type: 'setUser', user })
        },
        async transferFunds({ commit }, { contactId, amount }) {
            const user = await userService.transferFunds(contactId, amount)
            commit({ type: 'setUser', user })
        },
        async logout({ commit }) {
            await userService.logout()
            commit({ type: 'logout' })
        },
        onSetUserMsg({ commit }, { userMsg }) {
            commit({ type: 'setUserMsg', userMsg })
        }
    },
    getters: {
        user(state) { return state.user },
        userMsg(state) { return state.userMsg }
    }
}