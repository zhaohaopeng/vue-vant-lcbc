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
        <div class="text-2">请登录腾讯视频APP查看VIP权益是否到账</div>
        <div class="btn" @click="handleClose">我知道了</div>
      </div>
    </div>
  </van-dialog>
</template>

<script>
import { ref } from "vue";
import { Icon, Dialog } from "vant";
export default {
  name: "ModelApplyLimit",
  components: {
    [Icon.name]: Icon,
    [Dialog.Component.name]: Dialog.Component,
  },
  setup () {
    const show = ref(false);

    const handleOpen = () => {
      show.value = true;
    };

    const handleClose = () => {
      show.value = false;
    };

    return {
      show,
      handleOpen,
      handleClose,
    };
  },
};
</script>

<style lang="less" scoped>
.dialog-body {
  height: auto;
  padding: 20px;
  position: relative;
  .container {
    width: 100%;
    height: 260px;
    background: url('../assets/txsp/tx-success.png') no-repeat center;
    background-size: 100% 100%;
    text-align: center;
    box-sizing: border-box;
    padding: 20px;
    padding-top: 30px;
    color: #fff;
    font-size: 13px;
    position: relative;
    .close {
      width: 20px;
      height: 20px;
      background: url('../assets/txsp/tx-close.png') no-repeat center;
      background-size: 100% 100%;
      position: absolute;
      right: -8px;
      top: -8px;
    }
    .icon {
      width: 64px;
      height: 64px;
      margin: 0 auto;
      background: url('../assets/txsp/success.png') no-repeat center;
      background-size: 100% 100%;
    }
    .text-1 {
      text-align: center;
      font-size: 18px;
      margin-top: 18px;
      color: #ffddb5;
    }
    .text-2 {
      text-align: center;
      font-size: 14px;
      margin-top: 10px;
      color: #ffddb5;
    }
    .btn {
      width: 140px;
      height: 36px;
      margin: 0 auto;
      margin-top: 15px;
      background: url('../assets/txsp/btn-return.png') no-repeat center;
      background-size: 100% 100%;
      font-size: 13px;
      color: #fbede1;
      text-align: center;
      line-height: 36px;
    }
  }
}
</style>