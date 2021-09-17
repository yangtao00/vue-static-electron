<template>
  <div class="layout">
    <back-bar bgColor="#fdeded" />
    <router-view />
  </div>
</template>
<script setup lang="ts">
import BackBar from '@/components/back-bar.vue';
</script>
<style lang="scss" scoped>
@import '@/styles/invariables.scss';
.layout {
  min-height: 100vh;
  background: #fdeded;
  padding: 0 0 50px;
}
</style>
