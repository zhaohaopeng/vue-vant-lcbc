<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/0.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/1.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/2.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/3.jpg" alt="" />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { onMounted } from 'vue'
export default {
  setup () {
    const initSwiper = () => {
      new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1.3,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
          click: function (e) {
            if (!e || !e.target) return;
            console.log(e.target, ":v");
          }
        }
      });
    };

    onMounted(() => {
      initSwiper();
    })
  },
}
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  height: 200px;
}

.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  background: red;
  transform: scale(0.9);
  img {
    width: 100%;
    height: 100%;
  }
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}
</style>