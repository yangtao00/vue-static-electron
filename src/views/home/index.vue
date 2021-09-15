<template>
  <div class="page">
    <div class="content">
      <div class="title">目录</div>
      <div class="nav-box">
        <div
          v-for="nav in navList"
          class="nav-item"
          :key="nav.id"
          @click="handleClick(nav.link)"
        >
          <div class="inner">
            <el-image class="img" :src="nav.img" fit="cover"></el-image>
            <div class="content">
              {{ nav.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { navs } from './constants';
const navList = ref(navs);
const router = useRouter();
const handleClick = (link: string) => router.push(link);
</script>
<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #fdeded;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
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
    justify-content: center;
    margin: 0 auto;
    .nav-item {
      font-size: 26px;
      width: 320px;
      height: 200px;
      margin-bottom: 20px;
      padding: 0 10px;
      .inner {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        position: relative;
        overflow: hidden;
        .content {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          background: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
  @media screen and (max-width: 484px) {
    .nav-box {
      width: auto;
    }
  }
}
</style>
