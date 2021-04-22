<template>
  <div class="nav-bar"> <!--  这里最好用class, 不要用id-->
<!--    这里得用具名插槽, 需要加上name属性. 因为需要被指定-->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

  </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    /*height: 44px;*/
    line-height: 44px; /*导航栏高度一般都44px, 不过没有内容就撑不起来*/
    text-align: center; /*居中*/
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>