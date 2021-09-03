<template>
  <div class="back" @click="handleBack">
    <van-icon class="icon" name="down" />
    <span>返回上一页</span>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const handleBack = () => {
  router.back()
}
</script>
<style lang="scss" scope>
.back {
  padding: 20px;
  background: transparent;
  text-align: left;
  font-size: 20px;
  display: flex;
  align-items: center;
  .icon {
    margin-right: 10px;
    font-size: 24px;
    transform: rotate(90deg);
  }
}
</style>
