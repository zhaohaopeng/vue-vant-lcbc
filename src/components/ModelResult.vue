<template>
  <van-dialog
    style="margin-top: 5vh"
    v-model:show="show"
    :show-confirm-button="false"
    :close-on-click-overlay="false"
  >
    <div class="dialog-body">
      <div class="container">
        <div class="close" @click="handleClose"></div>
        <div class="icon"></div>
        <div class="text-1">兑换成功</div>
        <div class="text-2">请点击确认去小程序查看领劵明细</div>
        <div class="btn" @click="handleToWeChat">确认</div>
      </div>
    </div>
  </van-dialog>
</template>

<script>
import { ref } from "vue";
import { Icon, Dialog, Notify, Toast } from "vant";
import { generatescheme } from "@/api";
export default {
  name: "ModelApplyLimit",
  components: {
    [Icon.name]: Icon,
    [Dialog.Component.name]: Dialog.Component
  },
  setup() {
    const show = ref(false);
    let loading = false;
    let aid = null,
      uid = null;

    const handleOpen = res => {
      show.value = true;
      aid = res.aid;
      uid = res.uid;
    };

    const handleClose = () => {
      show.value = false;
    };

    const handleToWeChat = async () => {
      if (loading) {
        if (loading) return;
        try {
          Toast.loading({
            message: "加载中...",
            forbidClick: true
          });
          loading = true;
          const params = {
            path: "/pages/volume_lcbc/volume_lcbc",
            version: "release",
            query: `uid=${uid}&aid=${aid}`
          };
          const { openlink } = await generatescheme(params);
          Toast.clear();
          location.href = openlink;
          loading = false;
          handleClose();
        } catch (err) {
          Toast.clear();
          loading = false;
          Notify({ type: "warning", message: err });
        }
      } else {
        handleClose();
      }
    };

    return {
      show,
      handleOpen,
      handleClose,
      handleToWeChat
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-body {
  height: auto;
  padding: 20px;
  position: relative;
  .container {
    width: 100%;
    height: 230px;
    background: url("../assets/ccq/bgd-1.png") no-repeat center;
    background-size: 100% 100%;
    text-align: center;
    box-sizing: border-box;
    padding-top: 30px;
    color: #fff;
    font-size: 13px;
    position: relative;
    .close {
      width: 14px;
      height: 14px;
      background: url("../assets/ccq/close.png") no-repeat center;
      background-size: 100% 100%;
      position: absolute;
      right: 6px;
      top: 6px;
    }
    .icon {
      width: 64px;
      height: 64px;
      margin: 0 auto;
      background: url("../assets/ccq/success.png") no-repeat center;
      background-size: 100% 100%;
    }
    .text-1 {
      text-align: center;
      font-size: 18px;
      margin-top: 18px;
    }
    .text-2 {
      text-align: center;
      font-size: 14px;
      margin-top: 10px;
    }
    .btn {
      width: 120px;
      height: 36px;
      margin: 0 auto;
      margin-top: 15px;
      background: url("../assets/ccq/model-btn.png") no-repeat center;
      background-size: 100% 100%;
      font-size: 13px;
      color: #474c87;
      text-align: center;
      line-height: 36px;
    }
  }
}
</style>