// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },

  onUsernameInput(e) {
    this.setData({
      username: e.detail.value
    });
  },

  onPasswordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },

  onLogin() {
    if (!this.data.username || !this.data.password) {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none'
      });
      return;
    }
    const app = getApp();
    // 这里可以调用后端接口进行登录验证，以下仅为示例
    const userInfo = {
      username: this.data.username,
      password: this.data.password
    };
    console.log(userInfo)
    wx.request({
      url: 'http://127.0.0.1:3000/api/login',
      method: 'POST',
      data: userInfo,
      success(res) {
        console.log(res)
        app.globalData.userInfo = res.data.userInfo
        if (res.data.code === 200) {
          wx.showToast({
            title: res.data.message || '登录成功',
            icon: 'none'
          });
          
          wx.switchTab({
            url: '/pages/index/index'
          });
        } else {
          wx.showToast({
            title: res.data.message || '登录失败',
            icon: 'none'
          });
        }
      },
      fail() {
        wx.showToast({
          title: '网络错误，请稍后重试',
          icon: 'none'
        });
      }
    });
  },
  registerTap(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
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