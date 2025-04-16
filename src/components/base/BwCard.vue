<template>
  <view class="card-info" @click="linkTo">
    <view class="card-cover">
      <image class="image-cover" :src="row.cover" />
    </view>
    <view class="card-info-text">
      <view class="card-title">{{ row.title }}</view>
      <view class="card-message">
        <!-- <view class="day">周二 04/01</view> -->
        <view>{{ row?.position?.text }}</view>
      </view>
    </view>
  </view>
</template>

<script setup>
defineOptions({ name: "BwCard" });
const props = defineProps({
  row: {
    type: Object,
    default: () => ({}),
  },
});
const linkTo = () => {
  uni.navigateTo({
    url: `/pages/detail/detail?id=${props.row.id}`,
  });
};
</script>

<style lang="scss" scoped>
.card-info {
  box-shadow: 0px 4px 10px 2px #f1f1f1;
  border-radius: 0.5rem;
  // padding: 12rpx 0;
  .card-cover {
    width: 100%;
    height: 240rpx;
    margin-bottom: 6rpx;
    border-radius: 8rpx 8rpx 0 0;
    overflow: hidden;
    .image-cover {
      width: 100%;
      object-fit: cover;
      // border-radius: 8rpx 8rpx 0 0 ;
    }
  }
  .card-info-text {
    padding: 6rpx 12rpx;
    .card-title {
      color: #333;
      font-size: 14px;
      line-height: 18px;
      height: 36px;
      font-weight: 500;
      display: -webkit-box; /* 设置为WebKit内核的弹性盒子模型 */
      -webkit-box-orient: vertical; /* 垂直排列 */
      -webkit-line-clamp: 2; /* 限制显示三行 */
      overflow: hidden; /* 隐藏超出范围的内容 */
      text-overflow: ellipsis; /* 使用省略号 */
      margin-bottom: 12rpx;
    }
    .card-message {
      display: flex;
      justify-content: space-between;
      height: 16px;
      line-height: 16px;
      color: #666;
      font-size: 18rpx;
    }
  }
}
</style>
