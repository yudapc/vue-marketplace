<template>
  <div>
    <Banners />
    <ProductList />
  </div>
</template>

<script>
import Banners from "../../../components/Banners";
import ProductList from "../../../components/ProductList";

export default {
  name: "Homepage",
  components: {
    Banners,
    ProductList,
  },
};
</script>