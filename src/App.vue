<template>
  <div id="marketplace-layout">
    <a-layout>
      <router-link to="/">
        <a-layout-header>Tokopaedi</a-layout-header>
        <router-link to="/cart">Cart ({{ totalItems }})</router-link>
      </router-link>
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <a-layout-footer>PT ABC Copyright 2020</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      totalItems: "getNumberOfCart",
    }),
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background-color: #fff;
}
#marketplace-layout {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
#marketplace-layout .ant-layout-header,
#marketplace-layout .ant-layout-footer {
  background-color: #fff;
}
.ant-layout-header {
  color: rgb(3, 172, 14);
  font-size: 2em;
  border-bottom: 1px solid #ddd;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 4px 6px -1px;
  box-sizing: border-box;
}
#marketplace-layout .ant-layout-footer {
  line-height: 1.5;
}
#marketplace-layout .ant-layout-sider {
  background: #fff;
  line-height: 120px;
}
#marketplace-layout .ant-layout-content {
  min-height: 120px;
  background: #fff;
}
#marketplace-layout > .ant-layout {
  margin-bottom: 48px;
}
#marketplace-layout > .ant-layout:last-child {
  margin: 0;
}
</style>