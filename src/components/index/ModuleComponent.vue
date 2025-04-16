<template>
  <view class="title"> 近期活动 </view>
  <view class="desc-text">现在就和我们一起出发</view>
  <view class="module-cards">
    <bw-card v-for="(item, index) in AtricleList" :key="`row-${item.id}`" :row="item"></bw-card>
  </view>
</template>

<script setup>
defineOptions({ name: "ModuleComponent" });
import BwCard from "@/components/base/BwCard.vue";
import AtricleList from '@/config/config'

</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12rpx;
}
.desc-text {
  font-size: 12px;
  color: #999;
  margin-bottom: 24rpx;
}
.module-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24rpx;
}
</style>
