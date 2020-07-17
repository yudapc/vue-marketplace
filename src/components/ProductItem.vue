<template>
  <a-card hoverable>
    <img
      slot="cover"
      alt="example"
      :src="product.imageUrl"
      class="product-image"
    />
    <p class="product-title">{{ product.title }}</p>
    <p class="product-label">Mulai dari</p>
    <p class="product-price">{{ rupiah(product.price) }}</p>
    <p class="product-stock">tersedia {{ product.stock }} stok</p>
  </a-card>
</template>

<script>
import { rupiah } from '@/helpers/rupiah';

export default {
  props: ["product"],
  data() {
    return {
      rupiah,
    }
  }
}
</script>

<style>
.product-image {
  min-height: 195px;
  max-height: 195px;
}
.product-title {
  font-size: 13px;
  font-weight: 600 !important;
  margin-bottom: 5px;
}
.product-label {
  color: red;
  border: none;
  background-color: rgba(220, 20, 60, 0.12);
  font-size: 10px;
  font-weight: 600;
  box-sizing: border-box;
  width: 75px;
  text-align: center;
  padding: 1px 8px;
  margin-bottom: 5px;
}
.product-price {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 15px;
}
.product-stock {
  font-size: 12px;
  color: #888;
  margin-bottom: 0px;
}
</style>