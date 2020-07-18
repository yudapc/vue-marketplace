<template>
  <div class="container">
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
.container {
  display: grid;
  grid-template-columns: repeat(5, 171px);
  gap: 15px;
  justify-content: center;
  margin: 50px auto;
}

/* Responsive Breakpoint */
@media(max-width: 700px) {
  .container {
    grid-template-columns: repeat(2 minmax(200px, 1fr));
  }
}
@media(max-width: 500px) {
  .container {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 10px;
  }
}
</style>