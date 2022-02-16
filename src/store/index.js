import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        userinfo: {},
        openid: null,
        account: null
    },
    getters: {},
    mutations: {
        setopenid(state, openid) {
            state.openid = openid;
        },
        setAccount(state, account) {
            state.account = account;
        },
        setUserinfo(state, userinfo) {
            state.userinfo = userinfo;
        }
    },
    actions: {},
    modules: {}
})