<template>
  <div class="header">
    <div class="left">
      <img src="@/assets/images/logo.png" alt="" />
    </div>
    <div class="search"><input /></div>
    <div class="kefu">
      <i class="iconfont icon-kefu"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderComponents",
    data() {
      return {};
    },
    create() {},
    mounted() {},
    methods: {},
  };
</script>

<style scoped lang="less">
  .header {
    background-color: #b0352f;
    width: 100%;
    height: 1.173rem /* 44/37.5 */;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-content: center;
    img {
      width: 2.2667rem;
      height: 1.1733rem;
    }
  }
  .search {
    // height: 0.8rem;
    // width: 6.56rem;
    // background-color: white;
    // border-radius: 0.32rem;
    input {
      background-color: white;
      height: 0.8rem;
      width: 6.56rem;
      border-radius: 0.32rem;
    }
  }
  .kefu {
    i {
      font-size: 0.96rem;
      color: white;
    }
  }
</style>
