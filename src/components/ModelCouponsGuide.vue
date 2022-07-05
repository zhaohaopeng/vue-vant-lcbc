<template>
  <van-dialog
    v-model:show="show"
    :show-confirm-button="false"
    :close-on-click-overlay="false"
  >
    <div class="dialog-body">
      <div class="title">{{ title }}</div>
      <div class="close" @click="handleClose"></div>
      <div class="container">
        <div class="current-city" v-if="currentCity">
          <van-icon name="location-o" />当前城市：{{ currentCity }}
        </div>
        <div class="list-box">
          <div class="item" v-for="(item, index) in list" :key="index">
            {{ item.key }} {{ item.val }}
          </div>
        </div>
      </div>
    </div>
  </van-dialog>
</template>

<script>
import { ref } from "vue";
import { Icon, Dialog } from "vant";
import { getCurrentPosition } from "@/utils";
export default {
  name: "ModelApplyLimit",
  components: {
    [Icon.name]: Icon,
    [Dialog.Component.name]: Dialog.Component,
  },
  setup() {
    const title = ref([]);
    const show = ref(false);
    const currentCity = ref(null);

    /**
     * @name 获取当前所在城市
     */
    getCurrentPosition((city) => {
      currentCity.value = city;
    });

    const list = [
      {
        key: "保定市",
        val: "公交",
      },
      {
        key: "安丘市",
        val: "公交",
      },
      {
        key: "鞍山市",
        val: "公交",
      },
      {
        key: "巴彦淖尔市",
        val: "公交",
      },
      {
        key: "包头市",
        val: "公交",
      },
      {
        key: "滨州市",
        val: "公交",
      },
      {
        key: "亳州市",
        val: "公交",
      },
      {
        key: "常德市",
        val: "公交",
      },
      {
        key: "常州",
        val: "公交",
      },
      {
        key: "巢湖市",
        val: "公交",
      },
      {
        key: "郴州市",
        val: "公交",
      },
      {
        key: "沈阳",
        val: "地铁",
      },
      {
        key: "沈阳市",
        val: "公交",
      },
      {
        key: "池州市",
        val: "公交",
      },
      {
        key: "滁州",
        val: "公交",
      },
      {
        key: "大理州市",
        val: "公交",
      },
      {
        key: "大连",
        val: "条有轨电车",
      },
      {
        key: "大同市",
        val: "公交",
      },
      {
        key: "丹东市",
        val: "公交",
      },
      {
        key: "定州市",
        val: "公交",
      },
      {
        key: "东莞市",
        val: "地铁",
      },
      {
        key: "东营市",
        val: "公交",
      },
      {
        key: "鄂尔多斯市",
        val: "公交",
      },
      {
        key: "佛山市",
        val: "公交",
      },
      {
        key: "福州市",
        val: "公交",
      },
      {
        key: "抚顺市",
        val: "公交",
      },
      {
        key: "阜阳市",
        val: "公交",
      },
      {
        key: "广西壮族自治区",
        val: "公交",
      },
      {
        key: "哈尔滨市",
        val: "地铁",
      },
      {
        key: "海宁市",
        val: "地铁",
      },
      {
        key: "邯郸市",
        val: "公交",
      },

      {
        key: "合肥市",
        val: "地铁",
      },
      {
        key: "河源市",
        val: "公交",
      },
      {
        key: "菏泽市",
        val: "公交",
      },
      {
        key: "鹤岗市",
        val: "公交",
      },
      {
        key: "衡阳市",
        val: "公交",
      },
      {
        key: "呼和浩特市",
        val: "公交",
      },
      {
        key: "湖州市",
        val: "公交",
      },
      {
        key: "黄石市",
        val: "公交",
      },
      {
        key: "惠州市",
        val: "公交",
      },
      {
        key: "鸡西市",
        val: "公交",
      },
      {
        key: "济南市",
        val: "公交",
      },
      {
        key: "济宁市",
        val: "公交",
      },
      {
        key: "济源市",
        val: "公交",
      },
      {
        key: "佳木斯市",
        val: "公交",
      },
      {
        key: "嘉兴市",
        val: "有轨电车",
      },
      {
        key: "简阳市",
        val: "公交",
      },
      {
        key: "江门市",
        val: "公交",
      },
      {
        key: "揭阳市",
        val: "公交",
      },
      {
        key: "晋城市",
        val: "公交",
      },

      {
        key: "晋中市",
        val: "公交",
      },
      {
        key: "荆门市",
        val: "公交",
      },
      {
        key: "莒县浮来市",
        val: "公交",
      },
      {
        key: "凯里市",
        val: "公交",
      },
      {
        key: "莱芜市",
        val: "公交",
      },
      {
        key: "兰州市",
        val: "公交",
      },
      {
        key: "丽江市",
        val: "公交",
      },
      {
        key: "聊城市",
        val: "公交",
      },
      {
        key: "临汾市",
        val: "公交",
      },
      {
        key: "临海市",
        val: "公交",
      },
      {
        key: "临沂市",
        val: "公交",
      },
      {
        key: "六盘水市",
        val: "公交",
      },
      {
        key: "娄底市",
        val: "公交",
      },
      {
        key: "泸州市",
        val: "公交",
      },
      {
        key: "洛阳市",
        val: "公交",
      },
      {
        key: "马鞍山市",
        val: "公交",
      },
      {
        key: "茂名市",
        val: "公交",
      },
      {
        key: "眉山市",
        val: "公交",
      },
      {
        key: "梅州市",
        val: "公交",
      },
      {
        key: "名山区",
        val: "公交",
      },
      {
        key: "南昌市",
        val: "公交",
      },

      {
        key: "南充市",
        val: "公交",
      },
      {
        key: "南宁",
        val: "公交",
      },
      {
        key: "南平市",
        val: "公交",
      },
      {
        key: "南通市",
        val: "公交",
      },
      {
        key: "内江市",
        val: "公交",
      },
      {
        key: "宁波市",
        val: "地铁",
      },
      {
        key: "攀枝花市",
        val: "公交",
      },
      {
        key: "盘锦市",
        val: "公交",
      },
      {
        key: "平凉市",
        val: "公交",
      },
      {
        key: "莆田市",
        val: "公交",
      },
      {
        key: "濮阳市",
        val: "公交",
      },
      {
        key: "青岛市",
        val: "公交",
      },
      {
        key: "青州市",
        val: "公交",
      },
      {
        key: "清远",
        val: "公交",
      },
      {
        key: "曲靖市",
        val: "公交",
      },
      {
        key: "泉州市",
        val: "公交",
      },
      {
        key: "日照莒县市",
        val: "公交",
      },
      {
        key: "日照市",
        val: "公交",
      },
      {
        key: "荣成市",
        val: "公交",
      },
      {
        key: "瑞安市",
        val: "公交",
      },
      {
        key: "三亚市",
        val: "公交",
      },
      {
        key: "厦门市",
        val: "地铁",
      },
      {
        key: "汕头市",
        val: "公交",
      },
      {
        key: "汕尾市",
        val: "公交",
      },
      {
        key: "商丘市",
        val: "公交",
      },

      {
        key: "韶关市",
        val: "公交",
      },
      {
        key: "绍兴市",
        val: "地铁",
      },
      {
        key: "深圳",
        val: "公交",
      },
      {
        key: "深圳市",
        val: "地铁",
      },
      {
        key: "双鸭山市",
        val: "公交",
      },
      {
        key: "朔州市",
        val: "公交",
      },
      {
        key: "苏州市",
        val: "公交",
      },
      {
        key: "宿迁泗阳市",
        val: "公交",
      },
      {
        key: "随州市",
        val: "公交",
      },
      {
        key: "台州市",
        val: "公交",
      },
      {
        key: "太原市",
        val: "公交",
      },
      {
        key: "泰安市",
        val: "公交",
      },
      {
        key: "天津市",
        val: "公交",
      },
      {
        key: "天门",
        val: "公交",
      },
      {
        key: "天全县",
        val: "公交",
      },
      {
        key: "天水市",
        val: "有轨电车",
      },
      {
        key: "天长市",
        val: "公交",
      },
      {
        key: "铁岭市",
        val: "公交",
      },
      {
        key: "铜陵市",
        val: "公交",
      },
      {
        key: "威海市",
        val: "公交",
      },
      {
        key: "潍坊",
        val: "公交",
      },
      {
        key: "潍坊市",
        val: "公交",
      },
      {
        key: "温州市",
        val: "公交",
      },
      {
        key: "武汉市",
        val: "地铁",
      },
      {
        key: "西安市",
        val: "地铁",
      },
      {
        key: "西昌市",
        val: "公交",
      },
      {
        key: "西宁市",
        val: "公交",
      },
      {
        key: "锡林浩特市",
        val: "公交",
      },
      {
        key: "襄阳市",
        val: "公交",
      },
      {
        key: "孝感市",
        val: "公交",
      },
      {
        key: "雄安区",
        val: "公交",
      },
      {
        key: "徐州市",
        val: "公交",
      },
      {
        key: "雅安市",
        val: "公交",
      },
      {
        key: "烟台市",
        val: "公交",
      },
      {
        key: "延安市",
        val: "公交",
      },
      {
        key: "延吉市",
        val: "公交",
      },
      {
        key: "阳春市",
        val: "公交",
      },
      {
        key: "阳江市",
        val: "公交",
      },
      {
        key: "阳西",
        val: "公交",
      },
      {
        key: "伊春市",
        val: "公交",
      },
      {
        key: "宜宾市",
        val: "公交",
      },

      {
        key: "宜昌",
        val: "公交",
      },
      {
        key: "永州市",
        val: "公交",
      },
      {
        key: "岳阳市",
        val: "公交",
      },
      {
        key: "运城市",
        val: "公交",
      },
      {
        key: "枣庄",
        val: "公交",
      },
      {
        key: "枣庄市",
        val: "公交",
      },
      {
        key: "湛江",
        val: "公交",
      },
      {
        key: "张家口市",
        val: "公交",
      },
      {
        key: "漳州",
        val: "公交",
      },
      {
        key: "长治市",
        val: "公交",
      },
      {
        key: "昭通",
        val: "公交",
      },
      {
        key: "肇庆市",
        val: "公交",
      },
      {
        key: "郑州市",
        val: "地铁",
      },
      {
        key: "中山市",
        val: "公交",
      },
      {
        key: "重庆市",
        val: "地铁",
      },
      {
        key: "舟山市",
        val: "公交",
      },
      {
        key: "珠海市",
        val: "公交",
      },
      {
        key: "驻马店市",
        val: "公交",
      },
      {
        key: "淄博市",
        val: "公交",
      },
      {
        key: "自贡市",
        val: "公交",
      },
      {
        key: "邹平县",
        val: "公交",
      },
      {
        key: "重庆区",
        val: "县公交",
      },
      {
        key: "蚌埠",
        val: "公交",
      },
      {
        key: "黎族自治州",
        val: "蒙自公交",
      },
      {
        key: "兰州市",
        val: "公交",
      },
      {
        key: "洛阳市",
        val: "公交",
      },
      {
        key: "绍兴市",
        val: "公交",
      },
      {
        key: "武汉市",
        val: "地铁",
      },
      {
        key: "合肥市",
        val: "地铁",
      },
      {
        key: "东莞市",
        val: "地铁",
      },
      {
        key: "锦州市",
        val: "公交",
      },
    ];

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
      list,
      currentCity,
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
    background: url("../assets/ccq/modal-title.png") no-repeat center;
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
  .close {
    width: 22px;
    height: 22px;
    background: url("../assets/ccq/close.png") no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    right: 28px;
    top: 28px;
    z-index: 100;
  }

  .container {
    width: 100%;
    height: 50vh;
    background: url("../assets/ccq/bgd-4.png") no-repeat center;
    background-size: 100% 100%;
    text-align: center;
    box-sizing: border-box;
    color: #fff;
    font-size: 13px;
    position: relative;
    padding-top: 40px;
    .list-box {
      height: 40vh;
      overflow-y: auto;
      margin-top: 10px;
      .item {
        margin-top: 10px;
      }
    }

    .current-city {
      color: #000;
      z-index: 1000;
      width: 100%;
    }
  }
}
</style>