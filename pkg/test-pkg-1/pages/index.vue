<script>
import { PRODUCT_NAME } from '../types';

export default {
  name: 'Dashboard',
  data() {
    return { PRODUCT_NAME };
  }
};
</script>

<template>
  <div>
    <h3>{{ PRODUCT_NAME }}</h3>
    <div>Stuff goes here</div>
  </div>
</template>
