// pages/SingerDetails/SingerDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Eminem:[
      {title: 'MVThe Monster (Explicit)', name: 'Eminem / Rihanna'},
      {title: 'Love The Way You Lie', name: 'Eminem / Rihanna'},
      {title: 'Stan', name: 'Eminem / Dido'},
      {title: 'Shake That', name: 'Eminem / Nate Dogg'},
      {title: 'MVLose Yourself (Explicit)', name: 'Eminem'},
      {title: 'Love the Way You Lie, Pt. II', name: 'Rihanna / Eminem'},
      {title: 'I Need A Doctor (Explicit)', name: 'Dr. Dre / Eminem / Skylar Grey'},
      {title: 'Not Afraid', name: 'Eminem'},
      {title: 'Rap God (Explicit)', name: 'Eminem'}
    ],
    singerImg: '/images/singer/aiminamu.jpg',
    singerName: 'Eminem'
  },

 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    console.log(options)
    wx.request({
      url: 'http://192.168.43.76:9000/singer/findSongBySinger?name='+options.singer,
      header: {
        "contnet-type": "application/json"
      },
      success(res){
        _this.setData({
          Eminem: res.data.songEntity
        })
      }
    })

    wx.request({
      url: 'http://192.168.43.76:9000/singer/findSingerByName?name='+options.singer,
      header: {
        "contnet-type": "application/json"
      },
      success(res){
        console.log(res)
        _this.setData({
          singerImg: res.data.singerEntity[0].img,
          singerName: options.singer
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})