<template>
  <van-dialog
    style="margin-top: 5vh"
    v-model:show="show"
    :show-confirm-button="false"
    :close-on-click-overlay="false"
  >
    <div class="dialog-body">
      <div class="title">{{ title }}</div>
      <div class="container">
        <div class="close" @click="handleClose"></div>
        <div class="item">深圳市 公交</div>
        <div class="item">深圳市 地铁</div>
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
    const title = ref([]);
    const show = ref(false);

    const handleOpen = (t) => {
      title.value = t;
      show.value = true;
    };

    const handleClose = () => {
      show.value = false;
    };

    return {
      title,
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
  min-height: 150px;
  background: rgba(0, 0, 0, 0);
  position: relative;
  .title {
    width: 112px;
    height: 30px;
    background: url('../assets/activity-1/modal-title.png') no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    top: 14px;
    left: 50%;
    margin-left: -56px;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    z-index: 99;
  }
  .container {
    width: 100%;
    height: 150px;
    background: url('../assets/activity-1/bgd-4.png') no-repeat center;
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
      background: url('../assets/activity-1/close.png') no-repeat center;
      background-size: 100% 100%;
      position: absolute;
      right: 6px;
      top: 6px;
    }
    .item {
      margin-top: 10px;
    }
  }
}
</style>