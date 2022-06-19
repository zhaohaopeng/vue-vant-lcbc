<template>
  <div class="page">
    <div class="pendant" @click="handleJump">
      <img class="logo-ride" src="../assets/ccq/ride.png" />
      <div>去乘车</div>
    </div>
    <div class="header">
      <div class="text"></div>
    </div>
    <div class="body">
      <div class="box-1">
        <div class="button" @click="clickCouponsGuide(1)">可用城市</div>
        <div class="button" @click="clickCouponsGuide(2)">用劵指引</div>
      </div>
      <div class="box-2">
        <div class="top">
          <div class="text-1">积分兑换乘车劵</div>
        </div>
        <div class="center">
          <div
            v-for="(item, index) in commodity"
            :key="item.id"
            class="card"
            :class="{ active: itemsActive == index }"
            @click="itemsActive = index"
          >
            <div class="title">{{ item.name }}</div>
            <div class="text">{{ item.integral }}积分</div>
          </div>
        </div>
        <div class="bottom">
          <div class="btn" @click="handleExchange(1)">兑换储蓄卡乘车劵</div>
          <div class="btn" @click="handleExchange(2)">兑换信用卡乘车劵</div>
        </div>
      </div>
      <div class="box-3">可在微信-我-卡包-劵和礼品卡处查看已领取的乘车劵</div>
      <!-- <div class="box-4">
        <div class="title">特色活动</div>
        <div class="center">
          <div class="btn" @click="handleTowWelfare"></div>
        </div>
      </div> -->
      <div class="box-5">
        <ul class="rule-style">
          <!-- <li>一、活动时间：2022年6月6日-2022年12月31日</li>
          <li>二、活动主题：工行低碳月，低至一分钱出行</li>
          <li>
            三、活动内容
            <div class="text">活动期间，手机银行实名客户登录工商银行手机银行，可使用工行综合积分兑换工行信用卡和储蓄卡乘车券。</div>
          </li> -->
          <li>
            一、活动规则
            <div class="text">
              【积分查询】登录工商银行手机银行，进入“我的”，即可在主页面查看“我的积分”，点击进入“我的积分”，可查看积分明细和本年到期积分。
            </div>
            <div class="text">
              【兑换上限】单次最多可兑换同一卡种乘车券20张，同卡种乘车券可叠加使用。当<span class="text-bold">信用卡乘车券超过8张时，储蓄卡乘车券不可使用</span>，请按需兑换对应卡种乘车券。乘车券<span class="text-bold">数量有限，先到先得</span>。
            </div>
            <div class="text">
              【乘车券查询】已兑换的乘车券数量、状态及有效期可在“微信—我—卡包—券和礼品卡”页面中进行查询。
            </div>
            <div class="text">
              【有效期说明】乘车券自领取日起<span class="text-bold">7日内有效</span>，兑换后请在有效期内使用，<span class="text-bold">过期作废，不再发放</span>。
            </div>
            <div class="text">
              【使用方法】 在使用乘车券时，需要进入<span class="text-bold">“微信—我—支付—右上角3个点—扣费服务”</span>，将对应使用城市的公交和地铁<span class="text-bold">微信免密支付扣费方式</span>更改为<span class="text-bold">对应工行卡种</span>，当实际乘车金额大于乘车券面额时可抵扣。
            </div>
            <div class="text">
              【乘车方式】客户可在微信中搜索“乘车码”小程序，或通过腾讯地图APP主页面“乘车码”图标进行乘车。
            </div>
            <div class="text">
              【可用城市说明】乘车券仅限于<span class="text-bold">指定城市</span>使用，兑换前请提前确认所在城市在“可用城市”列表中。
            </div>
            <div class="text">
              如对于活动有任何疑问，可致电深圳市盛宇信达企业管理咨询有限公司客服：4008762568（工作日9:00-18:00）进行咨询或致电95588客服电话进行咨询。
            </div>
            <!-- <span class="text-bold"></span> -->
          </li>
        </ul>
      </div>
    </div>
    <ModelCouponsGuide ref="refModelCouponsGuide" />
    <ModelResult ref="refModelResult" />
    <ModelExchange ref="refModelExchange"  @ok="handleToWeChat" />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ModelCouponsGuide from "../components/ModelCouponsGuide";
import ModelResult from "../components/ModelResult";
import ModelExchange from "../components/ModelExchange";
import {
  addOrder,
  createUser,
  queryUserInfo,
  queryByIdActivity,
  queryCommodity,
  queryOrderInfo
} from "@/api/index";
import { Notify, Dialog } from "vant";
import store from "@/store";
export default {
  components: {
    ModelCouponsGuide,
    ModelResult,
    ModelExchange,
    [Dialog.Component.name]: Dialog.Component
  },
  setup() {
    const activityId = 1;
    const mobile = store.state.mobile;
    const deviceId = store.state.deviceId;
    const userId = store.state.userId;
    const router = useRouter();
    const itemsActive = ref(0);
    const refModelCouponsGuide = ref(null);
    const refModelResult = ref(null);
    const refModelExchange = ref(null);
    const userInfo = ref(null);
    const activity = ref(null);
    const commodity = ref(null);
    const userOrderInfo = ref({});

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
        const res = await queryCommodity({ type: 1 });
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
      const params = {
        account: mobile,
        ryuserid: userId,
        deviceId: deviceId
      };
      try {
        if (mobile) {
          await createUser(params);
          handleQueryUserInfo(params);
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

    async function handleExchange(type) {
      if (!type) {
        const { StatusMsg, StatusCode } = await addOrder();
        if (StatusCode == 0) {
          if (window.ICBCUtil && window.ICBCUtil.browseExternalURL) {
            window.ICBCUtil.browseExternalURL(StatusMsg);
          } else {
            window.location.href = StatusMsg;
          }
        }
      } else {
        refModelExchange.value.handleOpen(
          type,
          { ...commodity.value[itemsActive.value] },
          activityId,
          userInfo.value.id
        );
      }
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

    const handleToWeChat = () => {
      refModelResult.value.handleOpen({
        aid: activityId,
        uid: userInfo.value.id
      });
    };

    return {
      commodity,
      itemsActive,
      refModelCouponsGuide,
      refModelResult,
      refModelExchange,
      clickCouponsGuide,
      handleExchange,
      handleJump,
      handleTowWelfare,
      handleToWeChat
    };
  }
};
</script>

<style lang="less" scoped>
.page {
  width: 100vw;
  min-height: 100vh;
  background-color: #49caff;

  .pendant {
    position: fixed;
    width: 54px;
    height: 54px;
    top: 50%;
    right: 6px;
    margin-top: -27px;
    background-color: #fff;
    border-radius: 50%;
    font-size: 12px;
    text-align: center;
    z-index: 20;
    color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    .logo-ride {
      width: 22px;
      height: 22px;
      margin-top: 8px;
    }
  }

  .header {
    width: 100%;
    height: 260px;
    background: url("../assets/ccq/header.png") no-repeat center;
    background-size: 100% 100%;
    overflow: hidden;
    .text {
      width: 350px;
      height: 84px;
      background: url("../assets/ccq/header-text.png") no-repeat center;
      background-size: 100% 100%;
      margin :0 auto;
      margin-top: 44px;
    }
  }
  .body {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 15px;
    .box-1 {
      height: 48px;
      display: flex;
      justify-content: space-between;
      .button {
        width: 168px;
        height: 100%;
        background: url("../assets/ccq/box-1-btn.png") no-repeat center;
        background-size: 100% 100%;
        font-size: 14px;
        color: #ffffff;
        text-align: center;
        line-height: 48px;
      }
    }
    .box-2 {
      width: 100%;
      height: 214px;
      background: url("../assets/ccq/bgd-1.png") no-repeat center;
      background-size: 100% 100%;
      margin-top: 15px;
      .top {
        width: 100%;
        font-size: 14px;
        color: #ffffff;
        box-sizing: border-box;
        text-align: center;
        line-height: 28px;
        padding: 13px 2px;
        padding-bottom: 20px;
        .text-1 {
          width: 50%;
          float: left;
          text-align: left;
          text-indent: 15px;
        }
        .text-2 {
          width: 140px;
          height: 28px;
          border-top-left-radius: 14px;
          border-bottom-left-radius: 14px;
          background-color: #167dbf;
          float: right;
        }
      }

      .center {
        width: 100%;
        height: 78px;
        padding: 0 15px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        .card {
          width: 152px;
          height: 76px;
          background: url("../assets/ccq/card.png") no-repeat center;
          background-size: 100% 100%;
          font-size: 13px;
          color: #0d1824;
          box-sizing: border-box;
          padding: 15px;
          .text {
            margin-top: 10px;
            font-size: 12px;
          }
        }
        .card.active {
          background: url("../assets/ccq/card-active.png") no-repeat center;
          background-size: 100% 100%;
          color: #32755a;
        }
      }

      .bottom {
        width: 100%;
        height: 48px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        box-sizing: border-box;
        margin-top: 15px;
        .btn {
          width: 154px;
          height: 100%;
          background: url("../assets/ccq/box-2-btn.png") no-repeat center;
          background-size: 100% 100%;
          text-align: center;
          line-height: 48px;
          color: #474c87;
          font-size: 13px;
        }
      }
    }
    .box-3 {
      width: 100%;
      margin: 15px 0;
      height: 24px;
      line-height: 26px;
      text-align: center;
      background-color: #ffffff;
      border-radius: 12px;
      color: #1478bb;
      font-size: 13px;
    }
    .box-4 {
      width: 100%;
      height: 140px;
      background: url("../assets/ccq/bgd-3.png") no-repeat center;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 20px;
      .title {
        font-size: 14px;
        color: #ffffff;
      }
      .center {
        width: 100%;
        height: 74px;
        margin-top: 10px;
        background: url("../assets/ccq/active-1.jpg") no-repeat center;
        background-size: 100% 100%;
        position: relative;

        .btn {
          width: 106px;
          height: 30px;
          background: url("../assets/ccq/box-4-btn.png") no-repeat center;
          background-size: 100% 100%;
          position: absolute;
          bottom: 6px;
          left: 6px;
        }
      }
    }
    .box-5 {
      width: 100%;
      min-height: 400px;
      box-sizing: border-box;
      background: url("../assets/ccq/bgd-2.png") no-repeat center;
      background-size: 100% 100%;
      margin: 15px 0;
      padding: 5px 20px 5px 20px;
      color: #fff;
      font-size: 13px;
      .rule-style {
        list-style: none;
        li {
          margin: 12px 0;
          sup {
            font-weight: bold;
          }
          .text {
            margin-top: 6px;
            text-indent: 24px;

            .text-bold {
              font-weight: bold;
              color: orange;
            }
          }
        }
      }
    }
  }
}
</style>