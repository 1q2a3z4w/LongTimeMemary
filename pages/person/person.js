// pages/person/person.js
const {
  getLogin
} = require("../../api/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      nickname: '',
      uprofile:"",
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const app = getApp();
    let a = app.globalData.userInfo
    this.setData({
        userInfo:{
          nickname:a[0].uname,
          uprofile:a[0].uprofile
        }
    })
  },
  getUserProfile() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  tapAbout(){
    wx.navigateTo({
      url: '/pages/aboutUs/aboutUs',
    })
  },
  liketap(){
    wx.navigateTo({
      url: '/pages/like/like',
    })
  },
  userDataTab(e){
    wx.navigateTo({
      url: '/pages/userData/userData',
    })
  },
  myPostTap(e){
    wx.navigateTo({
      url: '/pages/mypost/mypost',
    })
  },
  myComTap(e){
    wx.navigateTo({
      url: '/pages/mycom/mycom',
    })
  },
  msgCenterTap(e){
    wx.navigateTo({
      url: '/pages/msgCenter/msgCenter',
    })
  },
  LDtap(){
    wx.navigateTo({
      url: '/pages/lastDelete/lastDelete',
    })
  },
  setTap(){
    wx.navigateTo({
      url: '/pages/set/set',
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