<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>Toko Online</a-layout-header>
      <a-layout-content>
        <ProductList />
        <ProductList />
        <ProductList />
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
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>