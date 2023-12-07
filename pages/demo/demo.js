// pages/demo/demo.js
const db = wx.cloud.database();
const msgCollection = db.collection("lliminiapp")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    messages: [], // 留言列表
    inputContent: '', // 输入框内容
    inputNickName:"",// 输入框内容
  },
  inputContentChange(e){
    this.setData({inputContent:e.detail.value})
  },
  inputNickChange(e){
    this.setData({inputNickName:e.detail.value})
  },
  submitMessage: function () {
    const message = {
      nickName:this.data.inputNickName,
      content: this.data.inputContent,
      createTime: new Date().toLocaleString(),
    }
    msgCollection.add({
      data: message,
      success: res => {
        console.log('添加成功', res)
        this.setData({
          messages: [...this.data.messages, message], // 更新留言列表
          inputContent: '', // 清空输入框内容
        })
      },
      fail: err => {
        console.error('添加失败', err)
      },
    })
  },
  deleteMessage: function (e) {
    const messageId = e.target.dataset.id;
    console.log(messageId)
    msgCollection.doc(messageId).remove({
      success: res => {
        console.log('删除成功', res);
        this.setData({
          messages: this.data.messages.filter(item => item._id !== messageId), // 更新留言列表
        });
      },
      fail: err => {
        console.error('删除失败', err);
      },
    });
  },  
  // 查询留言列表
  getMessages: function () {
    msgCollection.where({_openid: "oXyOL656DDE_B9voPgS_NCNjUdVM"}).get().then(res => {
      console.log(res)
      this.setData({
        messages: res.data, // 更新留言列表
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getMessages()
    console.log(this.data)
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