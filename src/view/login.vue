<script>
import store from "../store";
import { useRouter } from "vue-router";
import { getQueryVariable } from "@/utils/index";
import { queryUserInfoicbc } from "@/api";
import {
  Notify,
  // Dialog
} from "vant";
export default {
  setup() {
    async function init() {
      const userInfoKey = store.state.userInfoKey;
      const router = useRouter();
      if (userInfoKey) {
        router.push({
          name: "Ccq",
        });
      } else {
        const key = getQueryVariable("userInfoKey");

        if (!key) {
          const urlStr =
            "https://m.mall.icbc.com.cn/mobile/member/checkAuthorizationNew.jhtml?targetUrl=http%3A%2F%2Fsy.szduopin.com%2Fccq&outerName=8024";
          window.location.href = urlStr;
        } else {
          try {
            const { StatusMsg, mobile, deviceId, userId } =
              await queryUserInfoicbc({
                userInfoKey: key,
              });

            if (StatusMsg == "success") {
              store.commit("setUserInfoKey", key);
              store.commit("setMobile", mobile);
              store.commit("setDeviceId", deviceId);
              store.commit("setUserId", userId);
              router.push({
                name: "Ccq",
              });
            } else {
              Notify({
                type: "warning",
                message: "获取用户信息错误",
              });
            }
          } catch (err) {
            Notify({
              type: "warning",
              message: `系统错误`,
            });
          }
        }
      }
    }
    init();
  },
};
</script>