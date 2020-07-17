<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="3" v-for="(item, index) in dataProducts" :key="index">
        <div class="gutter-box">
          <ProductItem :product="item" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import ProductItem from './ProductItem';

export default {
  data() {
    return {
      dataProducts: [
        {
          id: 1,
          title: "Kaos Kaki Adidas",
          price: "Rp 10.000",
          stock: 10,
          imageUrl: "https://bisnisblanja-dev.s3.ap-southeast-1.amazonaws.com/public/images/XGiZcrXyep7vNxzRlCFhooWfh5WScuXVVhLI6a49.jpg"
        },
        {
          id: 2,
          title: "Kaos Kaki Wanita",
          price: "Rp 15.000",
          stock: 99,
          imageUrl: "https://bisnisblanja-dev.s3.ap-southeast-1.amazonaws.com/public/images/aNcWG5XDse2oLBnk1a3uo3PSBPlEAhlvAzWGUYfB.JPG"
        },
        {
          id: 3,
          title: "Kaca Mata Renang",
          price: "Rp 90.000",
          stock: 6,
          imageUrl: "https://bisnisblanja-dev.s3.ap-southeast-1.amazonaws.com/public/images/4q5LfkpR76gPwBsYzRVnH87C6p7fdgZzoZWqRe2I.jpg"
        },
        {
          id: 4,
          title: "Baju Renang Adidas",
          price: "Rp 50.000",
          stock: 5,
          imageUrl: "https://bisnisblanja-dev.s3.ap-southeast-1.amazonaws.com/public/images/cpHsqyAiLl4pdFYIj5km8Xs0CFg8n6Hm89ImqFsB.jpg"
        },
        {
          id: 5,
          title: "Kaos Oblong Adidas",
          price: "Rp 70.000",
          stock: 3,
          imageUrl: "https://bisnisblanja-dev.s3.ap-southeast-1.amazonaws.com/public/images/PihTOGOHtzbojsqhM4EAjPANXJeM9CSC6htnUZAz.jpg"
        },
      ],
    }
  },
  components: {
    ProductItem,
  }  
}
</script>

<style scoped>
.gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
  min-height: 120px;
}
</style>