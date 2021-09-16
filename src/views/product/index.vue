<template>
  <div class="page">
    <back-bar bgColor="#fdeded" />
    <div class="list">
      <div
        class="list-item"
        v-for="item in productList"
        :key="item.id"
        @click="handleClick(item.id)"
      >
        <el-image class="img" :src="item.thumb" fit="cover"></el-image>
        <div class="overlay">
          <div class="line">
            <div class="label">￥</div>
            <div class="value">{{ item.price }}</div>
          </div>
          <div class="desc multi-ellipsis--2">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BackBar from '@/components/back-bar.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { products } from './constants';
const productList = ref(products);
const router = useRouter();
const handleClick = (id: number | string) => {
  router.push({
    // path: '/product/detail',
    // query: {
    //   id,
    // },
    name: 'productDetail',
    params: {
      id,
    },
  });
};
</script>
<style lang="scss" scoped>
@import '@/styles/invariables.scss';
.page {
  min-height: 100vh;
  background: #fdeded;
  padding: 0 0 150px;
  .list {
    display: flex;
    flex-wrap: wrap;
    width: 980px;
    margin: 0 auto;
    padding-left: 20px;
    .list-item {
      width: 300px;
      height: 400px;
      margin: 0 20px 20px 0;
      position: relative;
      .img {
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
      .overlay {
        padding: 10px;
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        left: 0;
        width: 300px;
        bottom: 0;
        text-align: left;
        .line {
          display: flex;
          align-items: center;
          font-weight: 600;
          .label {
            font-size: 20px;
            color: $color-primary;
          }
          .value {
            font-size: 24px;
            color: $color-primary;
          }
        }
        .desc {
          color: $color-fff;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .list {
      width: 660px;
    }
  }
}
</style>
