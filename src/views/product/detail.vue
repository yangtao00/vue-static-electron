<template>
  <div class="page">
    <div class="title"></div>
  </div>
</template>
<script lang="ts" setup>
import { findProductDetailById } from '@/views/product/constants';
import { onMounted, defineProps } from 'vue';

const props = defineProps({
  id: [String, Number],
});
onMounted(() => {
  console.log('xx:', findProductDetailById(Number(props.id)));
});
</script>
<style lang="scss" scoped></style>
