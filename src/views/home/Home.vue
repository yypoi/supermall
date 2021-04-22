<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import {getHomeMultidata} from "@/network/home";

  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    components: {
      NavBar
    },
    created() {
      //1. 请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background: var(--color-tint);
    color: white;
  }
</style>