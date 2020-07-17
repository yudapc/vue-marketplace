<template>
  <div id="marketplace-layout">
    <a-layout>
      <a-layout-header>Toko Online</a-layout-header>
      <a-layout-content>
        <ProductList />
      </a-layout-content>
      <a-layout-footer>PT ABC Copyright 2020</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import ProductList from './components/ProductList';
export default {
  name: "App",
  components: {
    ProductList
  }
};
</script>

<style>
#marketplace-layout {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
#marketplace-layout .ant-layout-header,
#marketplace-layout .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#marketplace-layout .ant-layout-footer {
  line-height: 1.5;
}
#marketplace-layout .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#marketplace-layout .ant-layout-content {
  color: #fff;
  min-height: 120px;
}
#marketplace-layout > .ant-layout {
  margin-bottom: 48px;
}
#marketplace-layout > .ant-layout:last-child {
  margin: 0;
}
</style>