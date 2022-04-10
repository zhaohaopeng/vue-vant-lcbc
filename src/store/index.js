import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        // userInfoKey: "97CE76FA23FC44FDB6BDFA21B44018CA",
        // mobile: '13522293962',
        // deviceId: '2A22A3F6-B2D4-4BA7-94EF-C070FDA7E830',
        // userId: '202205269000002877',
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