<template>
  <div class="home">
    <HeaderComponents />
    <ly-tabs v-model="selectID" class="tabs" @change="switchTab" ref="lyTabRef">
      <ly-tab-item
        v-for="(item, index) in items"
        :key="index"
        :name="index"
        :title="item.label" />
    </ly-tabs>
    <tab-bar />
  </div>
</template>

<script>
  import TabBar from "../components/common/TabBar.vue";
  import HeaderComponents from "@/components/home/HeaderComponents";
  // @ is an alias to /src

  export default {
    name: "HomeView",
    components: { HeaderComponents, TabBar },
    data() {
      return {
        tableData: {},
        selectID: "1",
        items: [
          { label: "首页" },
          { label: "推荐" },
          { label: "i0s" },
          { label: "产品" },
          { label: "人工智能" },
          { label: "设计" },
          { label: "Android" },
          { label: "前端" },
          { label: "后端" },
        ],
      };
    },
    methods: {
      switchTab() {
        console.log("我被触发了", this.$refs);
      },
    },
  };
</script>
<style lang="less" scoped>
  .tabs {
    position: fixed;
    margin-top: 1.174rem;
  }
  ::v-deep .ly-tabs {
    box-shadow: none;
  }
</style>
