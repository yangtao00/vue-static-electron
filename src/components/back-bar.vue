<template>
  <div class="back" :style="{ backgroundColor: props.bgColor }">
    <div class="inner" @click="handleBack">
      <el-icon :size="24">
        <back />
      </el-icon>
      <span>返回上一页</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import { Back } from '@element-plus/icons';
const props = defineProps({
  bgColor: String,
});
const router = useRouter();
const handleBack = () => {
  router.back();
};
</script>
<style lang="scss" scope>
.back {
  padding: 20px;
  background: transparent;
  text-align: left;
  font-size: 20px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1111;
  .inner {
    display: flex;
    align-items: center;
  }
  .icon {
    margin-right: 10px;
    font-size: 24px;
    transform: rotate(90deg);
  }
}
</style>
