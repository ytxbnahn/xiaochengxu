//index.js
//获取应用实例
var app = getApp()
console.log(app)
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    Careers: ""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoddad')
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   console.log(userInfo)
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
    var userInfo = wx.getStorageSync('userinfo') || []
    var Careers = '';
    userInfo.Career.forEach(function(element) {
      console.log(element)
      Careers += element
    });
    this.setData({
        Careers:Careers
      })
    this.setData({
      userInfo:userInfo
    })
  }
})
