// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    tabList:[
      {img:'a'},
      {img:'b'},
      {img:'c'},
      {img:'d'},
      {img:'e'},
    ]
  },
  /**
 * 生命周期函数--监听页面显示
 */
  onShow() {
    if(typeof this.getTabBar === 'function' && this.getTabBar()){
      this.getTabBar().setData({
        selected:0
      })
    }
  },
  onLoad() {
    wx.request({
      url: 'https://www.zhaoxiedu.net/static/json/public.json', //当前请求的接口地址
      data: {  //data表示当前请求接口的参数
      },
      method:'GET',  //当前请求的请求方式
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        // this.setData({
        //   tabList: 
        // })
      }
    })
  },
})
