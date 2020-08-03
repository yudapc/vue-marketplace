<template>
  <div class="product-detail-container">
    <div class="productImages">
      <ProductImages :images="dataProduct.images" />
    </div>
    <div class="content">
      <h1 class="product-name">{{ dataProduct.name }}</h1>
      <div class="description border-top">{{ dataProduct.description }}</div>
      <div class="context-section border-top">
        <span class="section-item section-label">HARGA</span>
        <span class="section-item price">{{ rupiah(dataProduct.original_price) }}</span>
      </div>
      <div class="context-section border-top">
        <span class="section-item section-label">JUMLAH</span>
        <span class="section-item">
          <a-input-number size="large" :min="1" :max="100000" :default-value="quantity" @change="handleChangeQuantity" />
        </span>
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
      <div class="context-section border-top">
        <span class="section-item section-label">
          <a-button
            type="default"
            @click="addToCart({ id: dataProduct.id, masked_id: dataProduct.masked_id, image: getImageUrl(dataProduct.images), name: dataProduct.name, price: dataProduct.original_price, quantity })"
          >Tambah Ke Keranjang</a-button>
        </span>
        <div class="section-item">
          <a-button type="success">Beli</a-button>
          <span>Keranjang ({{ totalItems }})</span>
        </div>
      </div>
      <a-divider></a-divider>
      <div>
        <h3>Keranjang</h3>
        <div v-for="item in cart" :key="item.id">
          <p>
            <img :src="item.image" alt=""  width="150px">
            <b>{{ item.name.replace(/(.{20})..+/, "$1…") }}:</b>
            {{ item.quantity }} x {{ rupiah(item.price) }} = {{ rupiah(item.quantity * item.price) }}
            <a-button @click="deleteToCart({id: item.id})">Delete</a-button>
          </p>
        </div>
        <a-divider></a-divider>
        <div>
          <strong>Total Items:</strong>
          {{ totalItems }}
          <br />
          <strong>Total:</strong>
          {{ totalPrices }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { rupiah } from "../../../helpers/rupiah";
import ProductImages from "../../../components/ProductImages";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductDetail",
  components: {
    ProductImages,
  },
  mounted() {
    const id = this.$route.params.id;
    this.getProductDetail(id);
  },
  data() {
    return {
      dataProduct: {},
      rupiah,
      quantity: 1,
    };
  },
  methods: {
    async getProductDetail(id) {
      try {
        const response = await axios.get(
          "https://dev-api.bisnisblanja.my.id/api/v1/catalog/products-new/" + id
        );
        const dataUIComponent = response.data;
        if (Object.keys(dataUIComponent).length > 0) {
          this.dataProduct = dataUIComponent;
        } else {
          this.$router.push({ path: '/404' })
        }
      } catch (error) {
        console.log("Errornya: ", error);
      }
    },
    handleChangeQuantity(value) {
      const valueString = value + '';
      if (valueString.match(/^\d+$/)) {
        this.quantity = +value;
      }
    },
    getImageUrl(images) {
      console.log('masuk sini')
      const baseUrl = 'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/';
      if (images.length > 0) {
        return images[0].url;
      } else {
        return `${baseUrl}abstract01.jpg`;
      }
    },
    ...mapActions(["addToCart", "updateToCart", "deleteToCart"]),
  },
  computed: {
    totalPrices() {
      if (this.cart.length > 0) {
        return rupiah(
          this.cart.map((i) => i.price * i.quantity).reduce((a, b) => a + b)
        );
      }
      return 0;
    },
    ...mapGetters({
      cart: "cart",
      totalItems: "getNumberOfCart",
    }),
  },
};
</script>

<style scoped>
.product-detail-container {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-areas: "productImages content";
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
  justify-content: flex-start;
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