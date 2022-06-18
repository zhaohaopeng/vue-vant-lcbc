<template>
  <div class="page">
    <div class="container">
      <div class="title">腾讯视频会员</div>
      <div class="card-list">
        <div
          v-for="item in commodity"
          :key="item.code"
          class="card"
          :class="{ 'card-active': active == item.code }"
          @click="active = item.code"
        >
          <div class="name">{{ item.name }}</div>
          <div class="integral">{{ item.discount }}折</div>
          <div class="price">
            <div class="discount">¥{{ item.scribingPrice }}</div>
            <div class="text">原价¥{{ item.price }}</div>
          </div>
        </div>
      </div>
      <div class="input">
        <van-field
          v-model="userAccout"
          placeholder="请输入手机号、QQ、微信号"
        />
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
        <ul class="rule-style">
          <!-- <li>
            <div class="rule-title">一、活动时间</div>
            <div class="text-subtitle">2022年6月6日-2022年12月31日</div>
          </li>
          <li>
            <div class="rule-title">二、活动主题</div>
            <div class="text-subtitle">腾讯视频观影月</div>
          </li>
          <li>
            <div class="rule-title">三、活动对象</div>
            <div class="text-subtitle">中国工商银行手机银行实名客户</div>
          </li>
          <li>
            <div class="rule-title">四、活动内容</div>
            <div class="text-subtitle text-bold">
              活动一：积分兑换腾讯视频会员
            </div>
            <div class="text">
              活动期间，手机银行实名客户通过手机银行可使用工行综合积分兑换腾讯视频VIP会员（周卡/月卡/季卡/年卡）。
            </div>
            <div class="text-subtitle text-bold">
              活动二：腾讯视频会员优惠充值
            </div>
            <div class="text">
              活动期间，手机银行实名客户登录手机银行“腾讯视频观影月”活动页“优惠充值”栏目，可享受8折充值优惠。
            </div>
          </li> -->
          <li>
            <div class="rule-title">一、活动规则</div>
            <div class="text">
              1. 本活动商品均为虚拟物品，一经充值立即生效，<span
                class="text-bold text-orange"
                >充值成功后不支持退款或退还积分，本商品适用于手机、PAD、电脑（不含电视机）</span
              >。视频会员名额<span class="text-bold text-orange">数量有限，先到先得</span>。
            </div>
            <div class="text">
              2.积分查询方式：登录工商银行手机银行，进入“我的”，即可在主页面查看<span
                class="text-bold text-orange"
                >“我的积分”</span
              >，点击进入“我的积分”，可查看积分明细和本年到期积分。
            </div>
            <div class="text">
              3.积分兑换和优惠充值活动均为系统自动充值，请填写正确的充值手机号、<span
                class="text-bold text-orange"
                >QQ</span
              >号码、微信号，<span class="text-bold text-orange"
                >如填错充值号码，无法退还积分或退款</span
              >。<span class="text-bold text-orange">QQ</span
              >号与微信号是两个账号，账户信息不关联、不互通，请您在充值前务必先确认好自己的账户信息，避免充错。
            </div>
            <div class="text">
              4.如您的手机号已经在腾讯视频站内绑定腾讯视频VIP会员帐号，则会员卡将直接充值到用户绑定会员帐号中；如您的手机号没有在腾讯视频站内绑定会员帐号，需要完成相应手机号绑定及领取后享受会员特权。
            </div>
            <div class="text">
              5.会员入账查看方式：进入腾讯视频APP，<span class="text-bold text-orange"
                >“个人中心一我的VIP会员”</span
              >，或者腾讯视频VIP微信公众号中
              <span class="text-bold text-orange">“VIP服务一我的VIP”</span
              >，登录查看最新会员状态及时长
            </div>
            <div class="text">
              如有疑问，请咨询深圳市盛宇信达企业管理咨询有限公司，客服电话：400-001598（人工服务时间：9:00-18:00）或致电95588客服电话进行咨询。
            </div>
            <!-- <span class="text-bold"></span> -->
          </li>
        </ul>
        <div class="recharge">立即充值</div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Field, Col, Row } from "vant";
import { Notify } from "vant";
import { queryCommodity } from "@/api/index";

export default {
  components: {
    [Field.name]: Field,
    [Col.name]: Col,
    [Row.name]: Row,
  },
  setup() {
    const active = ref(1);
    const commodity = ref({});
    const userAccout = ref(null);

    const route = useRoute();
    const { value } = route.query;

    if (value) {
      const item = JSON.parse(value);
      active.value = item.code;
    }

    // 获取商品信息
    const handleQueryCommodity = async () => {
      try {
        const res = await queryCommodity({ type: 2 });
        commodity.value = res;
      } catch (err) {
        Notify({ type: "warning", message: err });
      }
    };

    handleQueryCommodity();

    return {
      active,
      commodity,
      userAccout,
    };
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  min-height: 100vh;
  background: #000;
  background: url("../assets/txsp/bgd.png") repeat-y center;
  background-size: 100% 100%;
  overflow: hidden;

  .black-box {
    width: 100%;
    height: 8px;
    background-color: #000;
  }

  .container {
    width: 100%;
    height: auto;
    padding: 15px;
    margin-top: 20px;
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
            width: 100%;
            height: 24px;
            text-align: center;
            line-height: 24px;
            color: #fdc255;
            font-size: 14px;
          }
          .text {
            font-size: 14px;
            color: #ffddb5;
            text-decoration: line-through;
          }
        }
        .integral {
          color: #ffddb5;
          font-size: 14px;
        }
      }

      .card-active {
        background: url("../assets/txsp/card-active.png") no-repeat center;
        background-size: 100% 100%;
        .name {
          color: #3a190e;
        }
        .integral {
          color: #3a190e;
        }
        .price {
          .discount {
            color: #3a190e;
          }
          .text {
            color: #3a190e;
          }
        }
      }
    }

    .input {
      margin-top: 15px;
      background: url("../assets/txsp/input.png") no-repeat center;
      background-size: 100% 100%;
    }
  }

  .footer {
    width: 100%;
    height: auto;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 44px;;

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

    .recharge {
      width: 100%;
      height: 44px;
      margin-top: 30px;
      background: url("../assets/txsp/recharge-btn.png") no-repeat center;
      background-size: 100% 100%;
      text-align: center;
      font-size: 14px;
      line-height: 44px;
      color: #f8ede1;
      position: fixed;
      bottom: 0;
      left: 0;
    }
  }
}

::v-deep .van-field__control::-webkit-input-placeholder {
  color: #a66b25 !important;
}
::v-deep .van-cell {
  background: none !important;
}

.rule-style {
  font-size: 14px;
  color: #ffddb5;
  list-style: none;
  text-align: left;
  li {
    margin: 12px 0;
    .rule-title {
      font-weight: bold;
      font-size: 14px;
      color: #ffddb5;
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
    .text-orange {
      color: orange;
    }
  }
}
</style>