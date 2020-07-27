<template>
  <div class="product-detail-container">
    <div class="productImages">
      <ProductImages :images="dataProduct.images" />
    </div>
    <div class="content">
      <h1 class="product-name">{{ dataProduct.name }}</h1>
      <div class="description border-top">
        {{ dataProduct.description }}</div>
      <div class="context-section border-top">
        <span class="section-item section-label">HARGA</span>
        <span class="section-item price">{{ rupiah(dataProduct.original_price) }}</span>
      </div>
      <div class="context-section border-top">
        <span class="section-item section-label">JUMLAH</span>
        <span class="section-item"></span>
      </div>
       <div class="context-section border-top">
        <span class="section-item section-label">PROMO</span>
        <span class="section-item"></span>
      </div>
       <div class="context-section border-top">
        <span class="section-item section-label">INFO PRODUK</span>
        <span class="section-item"></span>
      </div>
       <div class="context-section border-top">
        <span class="section-item section-label">ONGKOS KIRIM</span>
        <span class="section-item"></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { rupiah } from "../../../helpers/rupiah";
import ProductImages from "../../../components/ProductImages";

export default {
  name: "ProductDetail",
  components: {
    ProductImages,
  },
  data() {
    return {
      dataProduct: {},
      rupiah,
    };
  },
  methods: {
    async getProductDetail(id) {
      try {
        const response = await axios.get(
          "https://dev-api.bisnisblanja.my.id/api/v1/catalog/products-new/" + id
        );
        const dataUIComponent = response.data;
        this.dataProduct = dataUIComponent;
      } catch (error) {
        console.log("Errornya: ", error);
      }
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.getProductDetail(id);
  },
};
</script>

<style scoped>
.product-detail-container {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-areas:
    "productImages content";
  gap: 15px;
  justify-content: center;
  margin: 50px auto;
  width: 70%;
}
.productImages {
  grid-area: productImages;
}
.content {
  grid-area: content;
}

.product-name {
  font-weight: 800;
  font-size: 1.25rem;
}

.border-top {
  padding: 20px 0px;
  border-top: 1px solid rgb(229, 231, 233);
}
.context-section {
  display: flex;
  text-align: center;
  justify-content:flex-start
}
.price {
  color: rgb(250, 89, 29);
  line-height: 30px;
  font-size: 24px;
  margin: 0px;
  font-weight: bold;
}
.section-item {
  width: 200px;
}
.section-label {
  text-align: left;
  display: block;
  position: relative;
  font-weight: 700;
  font-size: 0.857143rem;
  line-height: 18px;
  color: rgba(49, 53, 59, 0.32);
  text-decoration: initial;
  margin: 0px;
}

</style>