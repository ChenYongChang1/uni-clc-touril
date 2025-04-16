<template>
  <view class="box-container">
    <view class="banner">
      <image class="image-banner" src="https://cyc-save.oss-cn-shanghai.aliyuncs.com/clc/waitan.jpg" mode="scaleToFill" />
    </view>
    <view class="modules">
      <module-component></module-component>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
const title = ref("ddd");
import ModuleComponent from '@/components/index/ModuleComponent.vue'
</script>

<style lang="scss" scoped>
.box-container {
  padding: 0 0.5rem;
  .banner {
    width: 100%;
    overflow: hidden;
    margin-bottom: 24rpx;
    .image-banner {
      width: 100%;
      border-radius: 0.5rem;
    }
  }
  .modules {
    width: 100%;
  }
}
</style>
