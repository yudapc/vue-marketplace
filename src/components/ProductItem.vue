<template>
  <div class="product-item">
    <router-link :to="{ path: 'products/detail/' + product.masked_id }">
      <img :src="product.imageUrl" alt />
      <p class="product-name">{{ product.title }}</p>
      <div class="label">
        <span class="grosir">Grosir</span>
        <span class="promo">Mulai dari</span>
      </div>
      <span class="price">{{ rupiah(product.price) }}</span>
      <p class="stock-info">Tersedia {{ product.stock }} stok</p>
    </router-link>
  </div>
</template>

<script>
import { rupiah } from "@/helpers/rupiah";

export default {
  props: ["product"],
  data() {
    return {
      rupiah,
    };
  },
};
</script>

<style>
.product-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px;
}
.product-item img {
  width: 100%;
  min-height: 171px;
}
.product-item .product-name {
  font-size: 13px;
  font-weight: 600;
  text-transform: capitalize;
  padding: 0 10px;
  line-height: 19px;
  max-height: 38px;
  white-space: normal;
  overflow-wrap: break-word;
  overflow: hidden;
  margin-bottom: 5px;
}
.product-item .price {
  font-size: 14px;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  padding: 0 10px;
}
.product-item .stock-info {
  color: #888 !important;
  font-size: 10px;
  padding: 10px 10px 0px 10px;
}
.product-item .label {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 0 10px;
}
.label .grosir {
  background-color: rgba(2, 149, 216, 0.12);
  font-weight: 600px;
  font-size: 8px;
  box-sizing: border-box;
  padding: 4px;
  border-radius: 2px;
  color: #0295d8;
  text-align: center;
  align-content: center;
  justify-content: center;
}
.label .promo {
  background-color: rgba(220, 20, 60, 0.12);
  font-weight: 600px;
  font-size: 8px;
  box-sizing: border-box;
  padding: 4px;
  border-radius: 2px;
  color: #dc143c;
  text-align: center;
  align-content: center;
  justify-content: center;
}
</style>