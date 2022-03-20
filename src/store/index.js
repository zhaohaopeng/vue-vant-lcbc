import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        userInfoKey: null,
        mobile: null,
        deviceId: null,
        userId: null,
    },
    getters: {},
    mutations: {
        setUserInfoKey(state, userInfoKey) {
            state.userInfoKey = userInfoKey;
        },
        setMobile(state, mobile) {
            state.mobile = mobile;
        },
        setDeviceId(state, deviceId) {
            state.deviceId = deviceId;
        },
        setUserId(state, userId) {
            state.userId = userId;
        }
    },
    actions: {},
    modules: {}
})