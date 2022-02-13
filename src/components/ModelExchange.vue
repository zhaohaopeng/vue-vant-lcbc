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
        <div class="title">{{ title }}</div>
        <div class="box">
          <div class="card">
            <div class="title">{{ checkedItem.name }}</div>
            <div class="text">
              {{ checkedItem.integral * checkedItem.num }}积分
            </div>
          </div>
          <div class="input">
            <van-stepper v-model="checkedItem.num" />
          </div>
        </div>
        <div class="box-1">
          <div>您兑换的是<span>储蓄卡</span>乘车劵</div>
          <div>一经兑换，不能退还</div>
        </div>
        <div class="button">
          <div class="btn btn-1" @click="handleClose">返回</div>
          <div class="btn btn-2" @click="handleConfirmSava">兑换</div>
        </div>
      </div>
    </div>
  </van-dialog>
</template>

<script>
import { ref } from "vue";
import { Icon, Dialog, Stepper } from "vant";
import { createOrder } from "@/api/index";
export default {
  name: "ModelApplyLimit",
  components: {
    [Icon.name]: Icon,
    [Dialog.Component.name]: Dialog.Component,
    [Stepper.name]: Stepper,
  },
  setup() {
    const show = ref(false);
    const title = ref(null);
    const checkedItem = ref(null);
    const num = ref(1);
    let activityid, uid, cardType;

    const handleOpen = (type, item, aid, _uid) => {
      cardType = type;
      title.value = type == 1 ? "储蓄卡乘车劵兑换" : "信用卡乘车劵兑换";
      checkedItem.value = item;
      show.value = true;
      num.value = 1;
      activityid = aid;
      uid = _uid;
    };

    const handleClose = () => {
      show.value = false;
    };

    const handleConfirmSava = async () => {
      const params = {
        activityid,
        uid,
        commodityid: checkedItem.value.id,
        cardType,
      };
      console.log(params, ":params");
      const { StatusMsg, StatusCode } = await createOrder(params);
      if (StatusCode == 0) {
        if (window.ICBCUtil && window.ICBCUtil.browseExternalURL) {
          window.ICBCUtil.browseExternalURL(StatusMsg);
        } else {
          window.location.href = StatusMsg;
        }
      }
    };

    return {
      show,
      title,
      num,
      checkedItem,
      handleOpen,
      handleClose,
      handleConfirmSava,
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
    height: 290px;
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

    .title {
      font-size: 13px;
      color: #fff;
    }

    .box {
      height: auto;
      box-sizing: border-box;
      padding: 18px 10px;
      display: flex;
      justify-content: space-between;

      .input {
        height: 76px;
        display: flex;
        align-items: center;
      }

      .card {
        width: 152px;
        height: 76px;
        background: url("../assets/ccq/card-active.png") no-repeat center;
        background-size: 100% 100%;
        font-size: 13px;
        box-sizing: border-box;
        padding: 15px;
        color: #32755a;
        text-align: left;
        .title {
          color: #32755a;
        }
        .text {
          margin-top: 10px;
          font-size: 12px;
        }
      }
    }
    .box-1 {
      div {
        margin-top: 10px;
      }
    }

    .button {
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .btn {
        width: 120px;
        height: 36px;
        margin: 0 auto;
        margin-top: 15px;
        font-size: 13px;
        color: #474c87;
        text-align: center;
        line-height: 36px;
      }
      .btn-1 {
        color: #fff;
        background: url("../assets/ccq/return.png") no-repeat center;
        background-size: 100% 100%;
      }
      .btn-2 {
        background: url("../assets/ccq/model-btn.png") no-repeat center;
        background-size: 100% 100%;
      }
    }
  }
}
</style>