import CryptoJS from 'crypto-js'

export default {
    // 加密
    encrypt(word) {
        const keyStr = 'dx5jxcjh6b8cyxq3'; // 判断是否存在ksy，不存在就用定义好的key
        const key = CryptoJS.enc.Utf8.parse(keyStr)
        const srcs = CryptoJS.enc.Utf8.parse(word)
        const encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
        return encrypted.toString()
    },
    // 解密
    decrypt(word) {
        const keyStr = 'mc7bnb0qt3rlcu01';
        const key = CryptoJS.enc.Utf8.parse(keyStr);
        const decrypt = CryptoJS.AES.decrypt(word, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
        return CryptoJS.enc.Utf8.stringify(decrypt).toString()
    }
}
