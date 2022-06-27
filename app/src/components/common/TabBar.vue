<template>
  <div class="tabbar">
    <ul>
      <li
        v-for="(item, index) in routerList"
        :key="index"
        @click="switchBar(item.path, index)">
        <img
          :src="$route.path.includes(item.path) ? item.selected : item.active"
          alt="" />
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        routerList: [
          {
            title: "首页",
            path: "/home",
            active: "./images/home.png",
            selected: "./images/home-select.png",
          },
          {
            title: "分类",
            path: "/list",
            active: "./images/list.png",
            selected: "./images/list-select.png",
          },
          {
            title: "购物车",
            path: "/cart",
            active: "./images/cart.png",
            selected: "./images/cart-select.png",
          },
          {
            title: "我的",
            path: "/my",
            active: "./images/my.png",
            selected: "./images/my-select.png",
          },
        ],
      };
    },
    methods: {
      switchBar(path, index) {
        // 避免当前页面重复点击,产生错误
        if (this.$route.path === path) {
          return;
        }
        this.$router.push(path);
      },
    },
  };
</script>

<style lang="less" scoped>
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.3333rem;
    background-color: white;
    ul {
      display: flex;
      justify-content: space-around;
      height: 100%;
      width: 100%;
      li {
        display: flex;
        flex-direction: column;
        img {
          width: 0.8267rem;
          height: 0.8267rem;
        }
        span {
          font-size: 0.3733rem;
        }
      }
    }
  }
</style>
