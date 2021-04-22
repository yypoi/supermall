<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swipers :banners="banners"></home-swipers>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import HomeSwipers from "@/views/home/childComps/HomeSwipers";
  import RecommendView from "@/views/home/childComps/RecommendView";
  import {getHomeMultidata} from "@/network/home";
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwipers,
      RecommendView
    },
    data() {
      return {
        banners: [],
        recommends: [],
      }
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