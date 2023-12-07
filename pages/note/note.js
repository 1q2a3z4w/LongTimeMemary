// pages/note/note.js
const app = getApp();
let a = app.globalData.userInfo
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: ""
  },
  draftTap() {
    wx.navigateTo({
      url: '/pages/draft/draft',
    })
  },
  draftInput(e) {
    let txt = e.detail.value
    this.setData({
      text: txt
    })
  },
  saveDrafTap() {
    wx.showModal({
      title: '提示',
      content: '是否保存为草稿',
      complete: (res) => {
        if (res.cancel) {}
        if (res.confirm) {
          wx.request({
            url: `http://127.0.0.1:3000/api/saveDraft?unum=${a[0].unum}`,
            data: {
              text: this.data.text,
              createTime: new Date().toISOString()
            },
            success: (res) => {
              console.log(res)
              this.setData({
                text: ""
              })
              wx.showToast({
                title: '保存成功',
              })
            },
            fail: (err) => {
              console.log(err)
              wx.showToast({
                title: '保存失败',
              })
            },
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(a)

  },
  pubTap(e) {
    if (this.data.text == '') {
      wx.showToast({
        title: '请输入文字',
        icon:"error"
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '是否发布',
        complete: (res) => {
          if (res.cancel) {}
          if (res.confirm) {
            wx.request({
              url: 'http://127.0.0.1:3000/api/notePub',
              data: {
                container: this.data.text,
                pubTime: new Date().toISOString(),
                profile_picture: a[0].uprofile,
                userName: "旧人一个",
              },
              success: (res) => {
                console.log(res)
                this.setData({
                  text: ""
                })
                wx.showToast({
                  title: '发布成功',
                })
              },
              fail: (err) => {
                console.log(err)
                wx.showToast({
                  title: '发布失败',
                })
              },
            })
          }
        }
      })
    }
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