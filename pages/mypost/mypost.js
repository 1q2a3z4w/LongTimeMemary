// pages/mypost/mypost.js
const app = getApp()
let a = app.globalData.userInfo
Page({

  /**
   * 页面的初始数据
   */
  data: {
    containers:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this
    console.log(a)
    wx.request({
        url: 'http://127.0.0.1:3000/api/myposts',
        data:{userName:a[0].uname},
        success: function (res) {
            console.log(res.data)
            that.setData({containers: res.data })
        },
        fail:function(res){
          console.log("获取失败")
          
        }
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