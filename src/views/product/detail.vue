<template>
  <div class="page">
    <div class="title">{{ state.detailInfo?.name }}</div>
    <div class="desc">{{ state.detailInfo?.desc }}</div>
    <div class="price">{{ `100` }}</div>
  </div>
</template>
<script lang="ts" setup>
import { findProductDetailById } from '@/views/product/constants';
import { onMounted, defineProps, reactive } from 'vue';

const props = defineProps({
  id: [String, Number],
});
const state = reactive({
  detailInfo: {},
});
onMounted(() => {
  state.detailInfo = findProductDetailById(Number(props.id));
  console.log('xx:', state.detailInfo);
});
</script>
<style lang="scss" scoped>
.page {
  padding: 30px;
  .title {
    font-size: 24px;
  }
  .desc {
    margin-top: 10px;
    font-size: 20px;
    line-height: 22px;
  }
}
</style>
