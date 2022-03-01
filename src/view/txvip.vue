<template>
  <div class="page">
    <div class="header">
      <img class="header-img" src="../assets/txsp/txvip-header.png" alt="" />
      <div class="box">
        <div class="btn-1">{{ commodity.name }}</div>
        <div class="top">
          <div class="integral">
            <span>{{ commodity.integral }}</span> 积分
          </div>
          <div class="discount">{{ commodity.discount }}折</div>
        </div>
        <div class="bottom">原价{{ price }}元</div>
      </div>
      <div class="box-1">
        <div class="input">
          <van-field
            v-model="userAccout"
            placeholder="请输入手机号、QQ、微信号"
          />
        </div>
      </div>
    </div>
    <div class="black-box"></div>
    <div class="footer">
      <div class="title">会员权益介绍</div>
      <div class="icon-list">
        <van-row>
          <van-col span="8">
            <div class="grid-item">
              <div class="icon">
                <img src="../assets/txsp/icon-1.png" />
              </div>
              <div class="text">广告特权</div>
            </div>
          </van-col>
          <van-col span="8">
            <div class="grid-item">
              <div class="icon">
                <img src="../assets/txsp/icon-2.png" />
              </div>
              <div class="text">下载特权</div>
            </div>
          </van-col>
          <van-col span="8">
            <div class="grid-item">
              <div class="icon">
                <img src="../assets/txsp/icon-3.png" />
              </div>
              <div class="text">角色弹幕</div>
            </div>
          </van-col>
          <van-col span="8">
            <div class="grid-item">
              <div class="icon">
                <img src="../assets/txsp/icon-4.png" />
              </div>
              <div class="text">杜比视听</div>
            </div>
          </van-col>
          <van-col span="8">
            <div class="grid-item">
              <div class="icon">
                <img src="../assets/txsp/icon-5.png" />
              </div>
              <div class="text">畅享蓝光</div>
            </div>
          </van-col>
          <van-col span="8">
            <div class="grid-item">
              <div class="icon">
                <img src="../assets/txsp/icon-6.png" />
              </div>
              <div class="text">漫画特权</div>
            </div>
          </van-col>
        </van-row>
        <p class="text">
          1.本活动商品均为虚拟物品,一经充值立即生效,充值成功后不支持退款或退还积分,本商品适用于手机、PAD、电脑（不含电视机）。
        </p>
        <p class="text">
          2.积分兑换和优惠充值活动均为系统自动充值,请填写正确的充值手机号、QQ号码、微信号，如填错充值号码，无法退还积分或退款。QQ号与微信号是两个账号，账户信息不关联、不互通,请您在充值前务必先确认好自己的账户信息,避免充错。
        </p>
        <p class="text">
          3.如您的手机号已经在腾讯视频站内绑定腾讯视频VIP会员帐号,则会员卡将直接充值到用户绑定会员帐号中;如您的手机号没有在腾讯视频站内绑定会员帐号,需要完成相应手机号绑定及领取后享受会员特权。
        </p>
        <p class="text">
          4.会员入账查看方式:进入腾讯视频APP,“个人中心一我的VIP会员”,或者腾讯视频VIP微信公众号中“VIP服务一我的VIP”,登录查看最新会员状态及时长。
        </p>
        <p class="text">
          5.如有疑问，请咨询深圳市盛宇信达企业管理咨询有限公司,客服电话:400001598(人工服务时间:9:00-18:00)。
        </p>
      </div>
    </div>
    <div class="recharge">
      <div class="recharge-btn-1">24元</div>
      <div class="recharge-btn-2">立即兑换</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Field, Col, Row } from "vant";
import { useRoute } from 'vue-router'

export default {
  components: {
    [Field.name]: Field,
    [Col.name]: Col,
    [Row.name]: Row,
  },
  setup () {
    const userAccout = ref(null);
    const route = useRoute();
    const { value } = route.query;
    const commodity = JSON.parse(value);

    return {
      commodity,
      userAccout
    }
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  min-height: 100vh;
  background: #000;
  background: url('../assets/txsp/bgd.png') repeat-y center;
  background-size: 100% 100%;
  .black-box {
    width: 100%;
    height: 8px;
    background-color: #000;
  }

  .header {
    width: 100%;
    height: auto;
    .header-img {
      height: 310px;
      vertical-align: bottom;
    }
    .box {
      width: 100%;
      height: 56px;
      background: url('../assets/txsp/box.png') repeat-y center;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 10px 20px;
      position: relative;
      .btn-1 {
        width: 112px;
        height: 28px;
        background: url('../assets/txsp/btn-1.png') no-repeat center;
        background-size: 100% 100%;
        position: absolute;
        right: 20px;
        top: 50%;
        margin-top: -14px;
        color: #ecd99f;
        text-align: center;
        line-height: 28px;
        font-size: 12px;
      }
      .top {
        display: flex;
        align-items: center;
        .integral {
          font-size: 14px;
          color: #25201f;
          span {
            font-size: 18px;
            font-weight: bold;
          }
        }
        .discount {
          width: 46px;
          height: 24px;
          margin-left: 10px;
          background: url('../assets/txsp/discount.png') no-repeat center;
          background-size: 100% 100%;
          text-align: center;
          line-height: 24px;
          color: #fff;
          font-size: 12px;
        }
      }
      .bottom {
        color: #25201f;
        text-decoration: line-through;
        font-size: 12px;
        opacity: 0.6;
      }
    }
    .box-1 {
      box-sizing: border-box;
      padding: 15px;
      .input {
        background: url('../assets/txsp/input.png') no-repeat center;
        background-size: 100% 100%;
      }
    }
  }

  .footer {
    width: 100%;
    height: auto;
    padding: 15px;
    box-sizing: border-box;

    .title {
      font-size: 18px;
      text-align: center;
      color: #ffddb5;
    }

    .text {
      font-size: 14px;
      color: #ffddb5;
      margin-bottom: 0;
    }

    .icon-list {
      width: 100%;
      margin-top: 28px;
      .grid-item {
        margin-bottom: 25px;
        text-align: center;
        .icon {
          width: 44px;
          height: 44px;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          font-size: 12px;
          margin-top: 10px;
          color: #fff;
        }
      }
    }
  }

  .recharge {
    width: 100%;
    height: 100px;
    background: url('../assets/txsp/recharge-bgd.png') no-repeat center;
    background-size: 100% 100%;
    text-align: center;
    color: #f8ede1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .recharge-btn-1 {
      width: 130px;
      height: 44px;
      background: url('../assets/txsp/btn-2.png') no-repeat center;
      background-size: 100% 100%;
      text-align: center;
      line-height: 44px;
      color: #fdc255;
      font-size: 15px;
    }
    .recharge-btn-2 {
      width: 200px;
      height: 44px;
      background: url('../assets/txsp/btn-3.png') no-repeat center;
      background-size: 100% 100%;
      text-align: center;
      line-height: 44px;
      color: #f8ede1;
      font-size: 15px;
    }
  }
}

::v-deep .van-field__control::-webkit-input-placeholder {
  color: #a66b25 !important;
}
::v-deep .van-cell {
  background: none !important;
}
</style>