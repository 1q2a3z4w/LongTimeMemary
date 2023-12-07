Page({

  /**
   * 页面的初始数据
   */
  data: {
    man: "",
    currentDate: '',
    lunarDate:"",
    uname:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getCurrentDate();
    this.getTimePeriod();
    const app = getApp();
    let a = app.globalData.userInfo
    console.log(app.globalData.userInfo)
    this.setData({
      uname:a[0].uname
    })
  },
  //日期转换
  getCurrentDate: function () {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月份从0开始，所以需要加1
    const day = date.getDate();  
    const formattedDate = `${year}年${month}月${day}日`;
    this.setData({
      currentDate: formattedDate
    });
  },
  //判断上午、下午、或晚上
   getTimePeriod() {
    const now = new Date();
    const hour = now.getHours();
    let timePeriod=""
    if (hour >= 0 && hour < 12) {
      timePeriod= "上午";
    } else if (hour >= 12 && hour < 18) {
      timePeriod= "下午";
    } else {
      timePeriod= "晚上";
    }
    this.setData({
      man:timePeriod
    })
  },
  recTodayTab(e){ 
    wx.navigateTo({
      url: '/pages/recToday/recToday',
    })},
  hotTap(e){
    wx.navigateTo({
      url: '/pages/hotTap/hotTap',
    })
  },
  classicRecalltab(e){
    wx.navigateTo({
      url: '/pages/classicRecall/classicRecall',
    })
  },
  EasyRelaxTab(e){
    wx.navigateTo({
      url: '/pages/EasyRelax/EasyRelax',
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})