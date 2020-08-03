<template>
  <a-layout>
    <a-layout-content>
      <a-table :columns="columns" :data-source="cart">
        <span slot="image" slot-scope="text, record">
          <img :src="record.image" alt width="150px" />
        </span>
        <span slot="name" slot-scope="text, record">
          <router-link :to="{ path: 'products/detail/' + record.masked_id }">
            {{record.name}}
          </router-link>
        </span>
        <span slot="quantity" slot-scope="text, record">
          <a-input-number
            size="large"
            :min="1"
            :max="100000"
            :default-value="record.quantity"
            @change="(value) => handleChangeQuantity(record.id, value)"
          />
        </span>
        <span slot="subtotal" slot-scope="text, record">{{ record.quantity * record.price }}</span>
        <span slot="action" slot-scope="text, record">
          <button @click="deleteToCart({ id: record.id })">Delete</button>
        </span>
      </a-table>
      <p>
        <strong>TOTAL ITEMS:</strong>
        {{ totalItems }}
      </p>
      <p>
        <strong>TOTAL:</strong>
        {{ totalPrices }}
      </p>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { rupiah } from "../../../helpers/rupiah";
import { mapGetters, mapActions } from "vuex";

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    scopedSlots: { customRender: "image" },
  },
  {
    title: "Product",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    scopedSlots: { customRender: "quantity" },
  },
  {
    title: "Subtotal",
    key: "subtotal",
    scopedSlots: { customRender: "subtotal" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

export default {
  data() {
    return {
      columns,
      rupiah,
    };
  },
  methods: {
    handleChangeQuantity(id, value) {
      const valueString = value + "";
      if (valueString.match(/^\d+$/)) {
        const quantity = +value;
        this.updateToCart({
          id,
          quantity,
        });
      }
    },
    ...mapActions(["updateToCart", "deleteToCart"]),
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