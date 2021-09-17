<template>
  <div class="page">
    <div class="title">{{ state.detailInfo?.name }}</div>
    <div class="desc">{{ state.detailInfo?.desc }}</div>
    <div class="price">
      <div class="label">惊喜价：</div>
      <div class="value">{{ state.detailInfo.price }}</div>
    </div>
    <div class="imgList">
      <div class="img-item" v-for="img in state.detailInfo.imgList" :key="img">
        <el-image class="img" :src="img" fit="cover"></el-image>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { findProductDetailById } from '@/views/product/constants';
import { onMounted, defineProps, reactive } from 'vue';

const props = defineProps({
  id: [String, Number],
});
const state = reactive<any>({
  detailInfo: {},
});
onMounted(() => {
  state.detailInfo = findProductDetailById(Number(props.id));
  console.log('xx:', state.detailInfo);
});
</script>
<style lang="scss" scoped>
@import '@/styles/invariables.scss';
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
  .price {
    margin-top: 15px;
    font-style: italic;
    display: flex;
    align-items: center;
    .label {
      font-size: 20px;
      color: $color-primary;
    }
    .value {
      font-size: 24px;
      color: $color-primary;
    }
  }
  .imgList {
    margin-top: 15px;
    text-align: center;
    .img-item {
      margin-bottom: 20px;
    }
  }
}
</style>
