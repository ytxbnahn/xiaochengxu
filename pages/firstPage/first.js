Page({
  data:{
    text: "nihao",
    show: true,
    interest: ["篮球", "足球", "乒乓球"],
    items: [
      {value: 'IT', name: 'IT'},
      {value: '码农', name: '中码', checked: 'true'},
      {value: '小码农', name: '小码农'}
    ],
    genders: [
      {value: '男', name: '男'},
      {value: '女', name: '女', checked: 'true'},
    ],
    model: {
      name:'',
      phone:'',
      gender: '',
      old:'',
      interestIndex: 0,
      Career: ['码农']
    }
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
   console.log("kkk")
  },
  showText: function(){
      var isShow = this.data.show;
      this.setData({text:"fdsfdsa",show:!isShow})
  },
  bindXmInput: function(e) {
    console.log(e.detail.value)
      this.setData({
        'model.name':e.detail.value
      })
  },
  bindPhoneInput: function(e) {
    console.log(e.detail.value)
    this.setData({
        'model.phone':e.detail.value
      })
  },
  bindDateChange: function (e) {
        this.setData({
            'model.old': e.detail.value
        })
  },
  bindInterestChange: function(e) {
  console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
        'model.interestIndex': e.detail.value
    })
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    var items = this.data.items, values = e.detail.value;
    for (var i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if(items[i].value == values[j]){
          items[i].checked = true;
          break
        }
      }
    }
    this.setData({
      'model.Career': e.detail.value
    })
    this.setData({
      items: items
    })
  },
   radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    var items = this.data.genders;
    for (var i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value == e.detail.value
    }
    this.setData({
      'model.gender': e.detail.value
    })
    this.setData({
      genders: items
    });
  },
  submit: function() {
    if(this.data.model.name ==''){
        wx.showToast({
            title: '请输入姓名',
            icon: 'success',
            duration: 3000
        });
      return;
    }else if(this.data.model.phone == ''){
       wx.showModal({
            content: '请输入电话',
            showCancel: false,
            success: function (res) {
                if (res.confirm) {
                    return;
                }
            }
        });
      return;
    }else if(this.data.model.old == ''){
       wx.showModal({
            content: '请输入出生年日',
            showCancel: false,
            success: function (res) {
                if (res.confirm) {
                    return;
                }
            }
        });
      return;
    }
    wx.setStorageSync('userinfo', this.data.model)
    wx.navigateTo({
      url: '../index/index'
    })
    console.log(this.data.model)
  }
})