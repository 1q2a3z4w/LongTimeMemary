// pages/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theme: 'light',
    language: 'zh-CN'
  },

  changeTheme: function() {
    if (this.data.theme === 'light') {
      this.setData({ theme: 'dark' });
    } else {
      this.setData({ theme: 'light' });
    }
  },

  changeLanguage: function() {
    if (this.data.language === 'zh-CN') {
      this.setData({ language: 'en-US' });
    } else {
      this.setData({ language: 'zh-CN' });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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