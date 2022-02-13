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
      <div class="box-4">
        <div class="title">特色活动</div>
        <div class="center">
          <div class="btn" @click="handleTowWelfare"></div>
        </div>
      </div>
      <div class="box-5">
        <div class="title">活动规则</div>
        <p>
          【兑换上限】单次最多可兑换同一卡种乘车券20张，同卡种乘车券可叠加使用。当信用卡乘车券超过8张时，储蓄卡乘车券不可使用，请按需兑换对应卡种乘车券。
        </p>
        <p>
          【乘车券查询】已兑换的乘车券数量、状态及有效期可在“微信一我─券和礼品卡”页面中进行查询。
        </p>
        <p>
          【有效期说明】乘车券自领取日起7日内有效，兑换后请在有效期内使用，过期作废，不再发放。
        </p>
        <p>
          【使用方法】在使用乘车券时，需要进入“微信一我一支付一右上角3个点一扣费服务”，将对应使用城市的公交和地铁微信免密支付扣费方式更改为对应工行卡种，当实际乘车金额大于乘车券面额时可抵扣。
        </p>
        <p>
          【乘车方式】客户可在微信中搜索“乘车码”小程序，或通过腾讯地图APP主页面“乘车码”图标进行乘车。【可用城市说明】乘车券仅限于指定城市使用，兑换前请提前确认所在城市在“可用城市”列表中。
        </p>
        <p>
          如对于活动有任何疑问，可致电深圳市盛宇信达企业管理咨询有限公司客服:4008762568(工作日9:00-18:00）进行咨询。
        </p>
      </div>
    </div>
    <ModelCouponsGuide ref="refModelCouponsGuide" />
    <ModelResult ref="refModelResult" />
    <ModelExchange ref="refModelExchange" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
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
} from "@/api/index";
import { Notify } from "vant";
export default {
  components: {
    ModelCouponsGuide,
    ModelResult,
    ModelExchange,
  },
  setup() {
    const activityId = 1;
    const account = "13522293962";
    const router = useRouter();
    const itemsActive = ref(0);
    const refModelCouponsGuide = ref(null);
    const refModelResult = ref(null);
    const refModelExchange = ref(null);
    const userInfo = ref(null);
    const activity = ref(null);
    const commodity = ref(null);

    // 查询活动
    const handleQueryByIdActivity = async () => {
      try {
        const res = await queryByIdActivity({ activityId });
        activity.value = { ...res };
        console.log(activity.value, ":activity.value");
      } catch (err) {
        Notify({ type: "warning", message: err });
      }
    };

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
      handleQueryByIdActivity();
      handleQueryCommodity();
    }

    // 查询用户
    const handleQueryUserInfo = async (params) => {
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
        await createUser({ account });
        handleQueryUserInfo({ account });
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
          name: "Guide",
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
          commodity.value[itemsActive.value]
        );
      }
    }
734
    function handleJump() {
      router.push({
        name: "Ride",
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

    onMounted(() => {
      // refModelResult.value.handleOpen();
    });

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
    };
  },
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
        background: url("../assets/ccq/active.png") no-repeat center;
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
      padding: 20px;
      color: #fff;
      .title {
        font-size: 14px;
        color: #ffffff;
      }
      p {
        margin-bottom: 0;
      }
    }
  }
}
</style>