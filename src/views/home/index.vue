<template>
  <div class="page">
    <div class="content">
      <div class="title">目录</div>
      <div class="nav-box">
        <div
          v-for="nav in navList"
          class="nav-item"
          :key="nav.id"
          :style="{ background: nav.background }"
          @click="handleClick(nav.link)"
        >
          <div>{{ nav.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { navs } from './constants'
const navList = ref(navs)
const router = useRouter()
const handleClick = (link: string) => router.push(link)
</script>
<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #fdeded;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  .content {
    flex: 1;
  }
  .title {
    font-size: 48px;
    margin-bottom: 50px;
  }
  .nav-box {
    width: 690px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    .nav-item {
      font-size: 26px;
      width: 320px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      margin-bottom: 30px;
      &:nth-last-child(2n) {
        margin-right: 30px;
      }
    }
  }
}
</style>
