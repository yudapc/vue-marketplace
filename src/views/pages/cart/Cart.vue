<template>
  <a-layout>
    <a-layout-content>
      <a-table :columns="columns" :data-source="cart">
        <span slot="quantity" slot-scope="text, record">
          <a-input-number size="large" :min="1" :max="100000" :default-value="record.quantity" @change="(value) => handleChangeQuantity(record.id, value)" />
        </span>
        <span slot="action" slot-scope="text, record">
          <button @click="deleteToCart({ id: record.id })">Delete</button>
        </span>
      </a-table>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { rupiah } from "../../../helpers/rupiah";
import { mapGetters, mapActions } from "vuex";

const columns = [
  {
    title: 'Product',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    scopedSlots: { customRender: 'quantity' }
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
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
      const valueString = value + '';
      if (valueString.match(/^\d+$/)) {
        const quantity = +value;
        this.updateToCart({
          id,
          quantity,
        })
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
}
</script>