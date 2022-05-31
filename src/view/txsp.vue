<template>
  <div class="page">
    <div class="header">
      <div class="logo">
        <div class="tx-logo"></div>
        <div class="gh-logo"></div>
      </div>
      <div class="title"></div>
      <div class="activity-time">活动时间：即日起 - 20202年12月31日</div>
    </div>
    <Swiper class="banner" />
    <div class="black-box"></div>
    <div class="container">
      <div class="title">
        积分兑换
      </div>
      <div class="card-list">
        <div class="card" v-for="item in commodity" :key="item.code">
          <div class="name">{{ item.name }}</div>
          <div class="price">
            <div class="discount">{{ item.discount }}折</div>
            <div class="text">¥{{ item.scribing_price }}</div>
          </div>
          <div class="integral">{{ item.integral }}积分</div>
          <div class="active" @click="handleExchange(item)">兑换</div>
        </div>
      </div>
    </div>
    <div class="black-box"></div>
    <div class="container">
      <div class="title">
        优惠充值
      </div>
      <div class="recharge-list">
        <div class="recharge" v-for="item in 3" :key="item">
          <div class="receive">点击领取</div>
          <div class="vertical-line"></div>
          <div class="text-box">
            <div class="title" v-if="item == 1">充值8折</div>
            <div class="title" v-if="item == 2">5折充值</div>
            <div class="title" v-if="item == 3">1元秒杀</div>
            <div class="subtitle" v-if="item == 2">周四品牌日</div>
            <div class="subtitle" v-if="item == 3">2月14日</div>
          </div>
        </div>
      </div>
    </div>
    <div class="black-box"></div>
    <!-- <div class="container">
      <div class="title">活动</div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <div class="welfare">
            <div class="title">更多优惠活动 在工行福利社等您</div>
            <div class="see">立即查看</div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="welfare">
            <div class="title">更多优惠活动 在工行福利社等您</div>
            <div class="see">立即查看</div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="black-box"></div> -->
    <!-- <div class="container">
      <div class="title">活动内容</div>
      <p class="text">活动一：积分兑换腾讯视频会员</p>
      <p class="text">
        活动期间,手机银行实名客户通过手机银行可使用工行综合积分兑换腾讯视频VIP会员(周卡/月卡/季卡/年卡)。
      </p>
      <p class="text">活动二：腾讯视频会员优惠充值</p>
      <p class="text">
        活动期间,手机银行实名客户登录手机银行“腾讯视频观影月”活动页“优惠充值”栏目,可享受8折充值优惠。
      </p>
    </div>
    <div class="black-box"></div> -->
    <div class="container">
      <!-- <div class="title">活动规则</div> -->
       <ul class="rule-style">
         <li>
           <div class="title">一、活动时间</div>
           <div class="text-subtitle">2022年6月6日-2022年12月31日</div>
         </li>
         <li>
           <div class="title">二、活动主题</div>
           <div class="text-subtitle">腾讯视频观影月</div>
         </li>
         <li>
           <div class="title">三、活动对象</div>
           <div class="text-subtitle">中国工商银行手机银行实名客户</div>
         </li>
         <li>
           <div class="title">四、活动内容</div>
           <div class="text-subtitle text-bold">活动一：积分兑换腾讯视频会员</div>
           <div class="text">
             活动期间，手机银行实名客户通过手机银行可使用工行综合积分兑换腾讯视频VIP会员（周卡/月卡/季卡/年卡）。
           </div>
           <div class="text-subtitle text-bold">活动二：腾讯视频会员优惠充值</div>
           <div class="text">
             活动期间，手机银行实名客户登录手机银行“腾讯视频观影月”活动页“优惠充值”栏目，可享受8折充值优惠。
           </div>
         </li>
         <li>
           <div class="title">五、活动规则</div>
           <div class="text">
             1. 本活动商品均为虚拟物品，一经充值立即生效，<span class="text-bold">充值成功后不支持退款或退还积分，本商品适用于手机、PAD、电脑（不含电视机）</span>。视频会员名额<span class="text-bold">数量有限，先到先得</span>。
           </div>
           <div class="text">
             2.积分查询方式：登录工商银行手机银行，进入“我的”，即可在主页面查看<span class="text-bold">“我的积分”</span>，点击进入“我的积分”，可查看积分明细和本年到期积分。
           </div>
           <div class="text">
             3.积分兑换和优惠充值活动均为系统自动充值，请填写正确的充值手机号、<span class="text-bold">QQ</span>号码、微信号，<span class="text-bold">如填错充值号码，无法退还积分或退款</span>。<span class="text-bold">QQ</span>号与微信号是两个账号，账户信息不关联、不互通，请您在充值前务必先确认好自己的账户信息，避免充错。
           </div>
           <div class="text">
             4.如您的手机号已经在腾讯视频站内绑定腾讯视频VIP会员帐号，则会员卡将直接充值到用户绑定会员帐号中；如您的手机号没有在腾讯视频站内绑定会员帐号，需要完成相应手机号绑定及领取后享受会员特权。
           </div>
           <div class="text">
             5.会员入账查看方式：进入腾讯视频APP，<span class="text-bold">“个人中心一我的VIP会员”</span>，或者腾讯视频VIP微信公众号中 <span class="text-bold">“VIP服务一我的VIP”</span>，登录查看最新会员状态及时长
           </div>
           <div class="text">
             如有疑问，请咨询深圳市盛宇信达企业管理咨询有限公司，客服电话：400001598（人工服务时间：9:00-18:00）或致电95588客服电话进行咨询。
           </div>
            <!-- <span class="text-bold"></span> -->
         </li>
       </ul>
    </div>
    <ModelTxSuccess ref="refModelTxSuccess" />
  </div>
</template>

<script>
import Swiper from "../components/Swiper.vue";
import ModelTxSuccess from "../components/ModelTxSuccess.vue";
import { Swipe, SwipeItem, Notify } from "vant";
import { ref, onMounted } from "vue";
import {
  createUser,
  queryUserInfo,
  queryByIdActivity,
  queryCommodity,
  queryOrderInfo
} from "@/api/index";
import store from "@/store";
import { useRouter } from "vue-router";
export default {
  components: {
    Swiper,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    ModelTxSuccess
  },
  setup() {
    const activityId = 2;
    const refModelTxSuccess = ref(null);
    const account = store.state.account;
    const router = useRouter();
    const itemsActive = ref(0);
    const refModelCouponsGuide = ref(null);
    const refModelResult = ref(null);
    const userInfo = ref(null);
    const activity = ref(null);
    const commodity = ref(null);
    const userOrderInfo = ref({});

    onMounted(() => {
      // refModelTxSuccess.value.handleOpen();
    });

    // 查询活动
    const handleQueryByIdActivity = async () => {
      try {
        const res = await queryByIdActivity({ activityId });
        activity.value = { ...res };
      } catch (err) {
        Notify({ type: "warning", message: err });
      }
    };
    handleQueryByIdActivity();

    // 获取商品信息
    const handleQueryCommodity = async () => {
      try {
        const res = await queryCommodity({ type: 2 });
        commodity.value = res;
      } catch (err) {
        Notify({ type: "warning", message: err });
      }
    };

    // 获取初始化数据
    function init() {
      handleQueryOrderInfo();
      handleQueryCommodity();
    }

    // 查询用户
    const handleQueryUserInfo = async params => {
      try {
        const res = await queryUserInfo(params);
        userInfo.value = res;
        init();
      } catch (err) {
        Notify({ type: "warning", message: err });
      }
    };

    // 创建账户
    async function handleCreateUser() {
      try {
        if (account) {
          await createUser({ account });
          handleQueryUserInfo({ account });
        } else {
          Notify({ type: "warning", message: "手机号为空" });
        }
      } catch (err) {
        Notify({ type: "warning", message: err });
      }
    }
    handleCreateUser();

    function clickCouponsGuide(type) {
      if (type == 1) {
        refModelCouponsGuide.value.handleOpen("可用城市");
      } else {
        router.push({
          name: "Guide"
        });
      }
    }

    function handleExchange(item) {
      router.push({
        name: "Txvip",
        query: {
          value: JSON.stringify(item)
        }
      });
    }

    function handleJump() {
      router.push({
        name: "Ride"
      });
    }

    function handleTowWelfare() {
      const url = "http://www.sz.icbc.com.cn/t/SWPTL9";
      if (window.ICBCUtil && window.ICBCUtil.browseExternalURL) {
        window.ICBCUtil.browseExternalURL(url);
      } else {
        window.location.href = url;
      }
    }

    // 查询指定人员订单信息
    const handleQueryOrderInfo = async () => {
      try {
        const res = await queryOrderInfo({
          uid: userInfo.value.id,
          activityid: activityId
        });
        userOrderInfo.value = res || {};
        if (
          userOrderInfo.value &&
          userOrderInfo.value.orderstate &&
          userOrderInfo.value.orderstate == "1"
        ) {
          refModelResult.value.handleOpen({
            aid: activityId,
            uid: userInfo.value.id
          });
        }
      } catch (err) {
        Notify({ type: "warning", message: err });
      }
    };

    return {
      activityId,
      refModelTxSuccess,
      commodity,
      itemsActive,
      clickCouponsGuide,
      handleExchange,
      handleJump,
      handleTowWelfare
    };
  }
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  min-height: 100vh;
  background: #000;
  background: url("../assets/txsp/bgd.png") repeat-y center;
  background-size: 100% 100%;
  .header {
    width: 100%;
    height: 164px;
    background: url("../assets/txsp/header.png") no-repeat center;
    background-size: 100% 100%;
    overflow: hidden;
    .logo {
      width: 230px;
      height: 28px;
      margin: 0 auto;
      margin-top: 30px;
      background: url("../assets/txsp/box-1.png") no-repeat center;
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .tx-logo {
        width: 98px;
        height: 18px;
        background: url("../assets/txsp/tx-logo.png") no-repeat center;
        background-size: 100% 100%;
        margin-right: 10px;
      }

      .gh-logo {
        width: 105px;
        height: 13px;
        background: url("../assets/txsp/gh-logo.png") no-repeat center;
        background-size: 100% 100%;
      }
    }

    .title {
      width: 258px;
      height: 36px;
      background: url("../assets/txsp/header-title.png") no-repeat center;
      background-size: 100% 100%;
      margin: 0 auto;
      margin-top: 16px;
    }

    .activity-time {
      text-align: center;
      margin-top: 15px;
      color: #ffddb5;
      font-size: 12px;
    }
  }
  .banner {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .black-box {
    width: 100%;
    height: 8px;
    background-color: #000;
  }
  .container {
    width: 100%;
    height: auto;
    padding: 15px;
    box-sizing: border-box;
    .title {
      color: #ffddb5;
      font-size: 18px;
    }
    .subtitle {
      float: right;
      font-size: 13px;
      color: #a58d89;
      margin-top: 4px;
    }
    .card-list {
      width: 100%;
      .card {
        margin-top: 10px;
        width: 100%;
        height: 56px;
        background: url("../assets/txsp/card.png") no-repeat center;
        background-size: 100% 100%;
        box-sizing: border-box;
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name {
          color: #ffddb5;
          font-size: 14px;
        }
        .price {
          text-align: center;
          .discount {
            width: 46px;
            height: 24px;
            background: url("../assets/txsp/discount.png") no-repeat center;
            background-size: 100% 100%;
            text-align: center;
            line-height: 24px;
            color: #fff;
            font-size: 12px;
          }
          .text {
            color: #98836a;
            text-decoration: line-through;
          }
        }
        .integral {
          color: #ffddb5;
          font-size: 14px;
        }
        .active {
          width: 52px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          color: #3a190e;
          font-size: 12px;
          background: url("../assets/txsp/exchange.png") no-repeat center;
          background-size: 100% 100%;
        }
      }
    }

    .recharge-list {
      width: 100%;
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .recharge {
        width: 106px;
        height: 66px;
        background: url("../assets/txsp/recharge.png") no-repeat center;
        background-size: 100% 100%;
        position: relative;

        .receive {
          width: 12px;
          font-size: 12px;
          color: #292320;
          position: absolute;
          left: 8px;
          top: 8px;
        }

        .vertical-line {
          width: 1px;
          height: 48px;
          border-left: 1px solid #3a190e;
          position: absolute;
          top: 8px;
          left: 30px;
        }

        .text-box {
          width: 60px;
          height: 50px;
          position: absolute;
          right: 8px;
          top: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .title {
            width: 100%;
            color: #292320;
            text-align: center;
            font-size: 14px;
          }

          .subtitle {
            width: 100%;
            text-align: center;
            color: #624000;
            font-size: 12px;
          }
        }
      }
    }

    .welfare {
      width: 100%;
      height: 111px;
      margin-top: 10px;
      background: url("../assets/txsp/welfare.png") no-repeat center;
      background-size: 100% 100%;
      position: relative;
      .title {
        position: absolute;
        top: 26px;
        left: 15px;
        font-size: 14px;
        color: #25201f;
      }

      .see {
        width: 70px;
        height: 26px;
        background: url("../assets/txsp/see.png") no-repeat center;
        background-size: 100% 100%;
        position: absolute;
        bottom: 26px;
        left: 15px;
        color: #ecd99f;
        text-align: center;
        line-height: 26px;
        font-size: 12px;
      }
    }

    .text {
      font-size: 14px;
      color: #ffddb5;
      margin-bottom: 0;
    }

    .rule-style {
      list-style: none;
      li {
        margin: 12px 0;
        .title {
          font-weight: bold;
          font-size: 14px;
        }
        .text-subtitle {
          margin-top: 10px;
          color: #ffddb5;
        }
        sup {
          font-weight: bold;
        }
        .text-bold {
          font-weight: 700;
        }
        .text {
          margin-top: 6px;
          text-indent: 24px;
          line-height: 26px;
        }
      }
    }
  }
}
</style>