<template>
  <div class="home">
    <h1>这是首页</h1>
    <HeaderComponents/>
    <tab-bar />
  </div>
</template>

<script>
import TabBar from "../components/common/TabBar.vue";
import HeaderComponents from "@/components/home/HeaderComponents";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {HeaderComponents, TabBar },
};
</script>
