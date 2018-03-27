var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');



var app = getApp();

Page({
  data: {
    array: ['请选择反馈类型', '商品相关', '物流状况', '客户服务', '优惠活动', '功能异常', '产品建议', '其他'],
    index: 0,
    content :  "",
    mobile : "",
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bindinputContent(event) {
    this.setData({
      content: event.detail.value
    });
  },

  bindinputMobile(event) {
    this.setData({
      mobile: event.detail.value
    });
  },

  submitFeedback : function()
  {

    if (this.data.index ==  0) {
      util.showErrorToast('请选择反馈类型');
      return false;
    }
    if (this.data.content == '') {
      util.showErrorToast('请输入反馈内容');
      return false;
    }

    if (this.data.mobile == '') {
      util.showErrorToast('请输入手机号码');
      return false;
    }

    let that = this;
    util.request(api.Feedback, { 
      index: this.data.index,
      content: this.data.content,
      mobile: this.data.mobile,
    }, 'POST').then(function (res) {
      if (res.errno === 0) {
        console.log("反馈成功");
      }
    });
  },
  

  onLoad: function (options) {
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭
  }
})