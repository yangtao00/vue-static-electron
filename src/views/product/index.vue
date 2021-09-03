<template>
  <div class="page">
    <Back />
    <div class="list">
      <div class="list-item" v-for="item in productList" :key="item.id">
        <div class="img"></div>
        <div class="overlay">
          <div class="line">
            <div class="label">￥</div>
            <div class="value">{{ item.price }}</div>
          </div>
          <div class="desc van-multi-ellipsis--l2">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Back from '@/components/back.vue'
import { ref } from 'vue'
import { products } from './constants'
const productList = ref(products)
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
    justify-content: center;
    .list-item {
      width: 340px;
      height: 300px;
      margin: 0 20px 20px 0;
      position: relative;
      .img {
        width: 340px;
        height: 300px;
        vertical-align: top;
        background: yellow;
      }
      .overlay {
        padding: 10px;
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        left: 0;
        width: 340px;
        bottom: 0;
        text-align: left;
        .line {
          display: flex;
          align-items: center;
          .label {
            font-size: 14px;
            color: $color-primary;
          }
          .value {
            font-size: 20px;
            color: $color-primary;
          }
        }
      }
    }
    .list-item:nth-child(2n) {
      margin-right: 0;
    }
  }
}
</style>
