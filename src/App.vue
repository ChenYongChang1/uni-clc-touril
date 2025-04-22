<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
    uni.showShareMenu({
      withShareTicket: true,
      //设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
      menus: ["shareAppMessage", "shareTimeline"],
    });
  },
  onLoad() {},
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
</style>
