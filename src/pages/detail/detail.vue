<template>
  <view class="bg-cover">
    <image class="image-cover" :src="rowInfo.cover" />
  </view>
  <view class="introduced-info">
    <view class="introduced-card">
      <view class="introduced-title">{{ rowInfo.title }}</view>
      <view class="time-info-position">
        <!-- <view class="common">周二 04.01 15.30 ~ 18.00</view> -->
        <view class="common">{{ rowInfo.position?.text }}</view>
      </view>
    </view>
    <view class="introduced-card">
      <view class="content" v-html="content"> </view>
      <!-- <mp-html :content="content"></mp-html> -->
    </view>
  </view>
</template>

<script setup>
import { computed } from "vue";
import { marked } from "marked";
import AtricleList from "@/config/config";
import { onMounted, ref } from "vue";

// 定义一个响应式变量来存储 query 参数
const query = ref({});
const rowInfo = ref({});

onMounted(() => {
  // 使用 UniApp 的 getCurrentPages 方法获取当前页面栈
  const pages = getCurrentPages();
  if (pages.length > 0) {
    // 获取当前页面实例
    const currentPage = pages[pages.length - 1];
    // 从页面实例中获取 query 参数
    query.value = currentPage.options;
    rowInfo.value =
      AtricleList.find((i) => i.id?.toString() === query.value.id) || {};
    // console.log(query.value, rowInfo.value);
  }
});
const content = computed(() => {
  let str = marked(rowInfo.value.content || "");
  // console.log(str, rowInfo.value.content, "str");
  str = str.replace(/\<p>/g, '<p class="p">');
  str = str.replace(/\<span>/g, '<span class="span">');
  str = str.replace(/\<div>/g, '<div class="div">');
  str = str.replace(/\<h1>/g, '<h1 class="h1">');
  str = str.replace(/\<h2>/g, '<h2 class="h2">');
  str = str.replace(/\<h3>/g, '<h3 class="h3">');
  str = str.replace(/\<h4>/g, '<h4 class="h4">');
  str = str.replace(/\<h5>/g, '<h5 class="h5">');
    str = str.replace(/\<ul>/g, '<ul class="ul">');
  return str;
});
</script>

<style lang="scss" scoped>
.image-cover {
  width: 100%;
  position: relative;
  z-index: 1;
}
.introduced-info {
  position: relative;
  z-index: 2;
  top: -40px;
  min-height: 100px;
  margin-bottom: -20px;
  .introduced-card {
    width: 90%;
    border-radius: 8px;
    background: white;
    margin: auto;
    box-shadow: 0 0 8px 1px rgb(238, 238, 238);
    padding: 24rpx 24rpx;
    margin-bottom: 36rpx;
  }
  .introduced-title {
    color: #333;
    font-size: 16px;
    margin-bottom: 24rpx;
  }
  .time-info-position {
    color: #666;
    font-size: 12px;
    margin-bottom: -16rpx;
    background: linear-gradient(to right, transparent 20%, rgb(183, 218, 236));
    border-radius: 8px;
    padding: 12rpx 0;
    display: grid;
    gap: 12rpx;
    .common {
      line-height: 18px;
    }
  }
  .content {
    font-size: 14px;
    color: #333;
    line-height: 20px;
  }
}
</style>
