<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Products</h1>
    <product-item v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCart"></product-item>
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} - ${{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import ProductItem from './ProductItem.vue';

export default {
  components: {
    ProductItem
  },
  setup() {
    const products = ref([
      { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 10 },
      { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 20 },
      { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 30 }
    ]);
    const cart = ref([]);

    const addToCart = (product) => {
      cart.value.push(product);
    };

    return {
      products,
      cart,
      addToCart
    };
  }
};
</script>