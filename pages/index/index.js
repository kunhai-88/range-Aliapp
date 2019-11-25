Page({
  data: {
    width: 0,
    left: 0,
    deltaValue: 100,
    currentSlider: '',
    start: 0,
    end: 100
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
 
  onTouchMove (event) {
    console.log(event);
  },
  onTouchEnd (event) {
      console.log(event);
  }
});
