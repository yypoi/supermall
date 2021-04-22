<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive() {
        //判断当前活跃的路由包不包含item的link
        return this.$route.path.indexOf(this.link) != -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link).catch(() => {
          console.log('重复点击了');
        })
      }
    }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    /*一般来说tabbar的高度设置为49px*/
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /*图片下面会留出3px，为了去除默认3像素，用这个*/
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>