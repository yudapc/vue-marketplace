<template>
  <div class="flex-container">
    <div v-for="(item, index) in dataProducts" :key="index">
      <ProductItem :product="item" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductItem from "./ProductItem";

const productParser = dataJson => {
  return dataJson.map(item => ({
    id: item.id,
    title: item.name,
    price: item.original_price,
    stock: item.stock,
    imageUrl: item.images ? item.images[0].url : ""
  }));
};

export default {
  data() {
    return {
      dataProducts: []
    };
  },
  components: {
    ProductItem
  },
  methods: {
    getProducts() {
      axios
        .get("http://localhost:8080/api/products.json")
        .then(
          response => (this.dataProducts = productParser(response.data.data))
        );
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 250px;
  margin: 10px 20px;
  line-height: 75px;
  font-size: 30px;
  height: 400px;
}
</style>