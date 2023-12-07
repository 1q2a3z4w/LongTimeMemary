// pages/draft/draft.js
const app = getApp()
let a = app.globalData.userInfo
Page({

  /**
   * 页面的初始数据
   */
  data: {
    containers: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.showDraft();
  },
  showDraft() {

    wx.request({
      url: `http://127.0.0.1:3000/api/draft/show?unum=${a[0].unum}`,
      success: (res) => {
        console.log(res.data),
          this.setData({
            containers: res.data
          })
      },
      fail: (res) => {},

    })
  },
  deleteDraft(e) {
    let id = e.target.dataset.id
    wx.request({
      url: `http://127.0.0.1:3000/api/draft/delete?textid=${id}&unum=${a[0].unum}`,
      success: (res) => {
        console.log(res)
        this.showDraft()
        wx.showToast({
          title: '删除成功',
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  deleteTap(e) {
    this.deleteDraft(e)
  },
  pubTap(e) {
    let id = e.target.dataset.id
    wx.request({
      url: `http://127.0.0.1:3000/api/draft/pub?textid=${id}&unum=${a[0].unum}`,
      success: (res) => {
        console.log(res)
        wx.showToast({
          title: '发布成功',
        })
        this.deleteTap(e);
      },fail: (err) => {
        console.log(err)
        wx.showToast({
          title: '发布失败',
        })
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