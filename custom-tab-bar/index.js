Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "首页"
    }, {
      pagePath: "/pages/about/index",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "关于我们"
    },{
      pagePath: "/pages/case/index",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "课程中心"
    }, {
      pagePath: "/pages/solution/index",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "诚聘英才"
    }, {
      pagePath: "/pages/personal/index",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "个人中心"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      console.log(data)
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})