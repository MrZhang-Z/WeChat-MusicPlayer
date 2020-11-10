// pages/favorite/favorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList_favorite:[
      {src:'/images/songs/songs_chuimeng.jpg', title:'吹梦到西洲\n', name: '恋恋故人难'},
      {src:'/images/songs/songs_cominghome.jpg', title:'Coming Home\n', name: 'Dash Berlin'},
      {src:'/images/songs/songs_love.jpg', title:'Love Story\n', name: 'Taylor Swift'},
      {src:'/images/songs/songs_tianxia.jpg', title:'天下\n', name: '高鱼'},
      {src:'/images/songs/songs_yiran.jpg', title:'易燃易爆炸\n', name: '陈粒'},
      {src:'/images/songs/songs_huanting.jpg', title:'幻听\n', name: '许嵩'},
      {src:'/images/songs/songs_ganxie.jpg', title:'感谢你曾经来过\n', name: 'Ayo97'},
      {src:'/images/songs/songs_jiumeng.jpg', title:'旧梦一场\n', name: '阿悠悠'},
      {src:'/images/songs/songs_qingtian.jpg', title:'晴天\n', name: '周杰伦'},
      {src:'/images/songs/songs_remember.jpg', title:'Remember Name\n', name: 'Fort Minor'},
      {src:'/images/songs/songs_suyan.jpg', title:'素颜\n', name: '许嵩'},
      {src:'/images/songs/songs_halloffame.jpg', title:'Hall Of Fame\n', name: 'The Script'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'http://192.168.43.76:9000/my/getMyLikeSong',
      header: {
        "contnet-type": "application/json"
      },
      success(res){
        console.log(res.data)
        if(res.data.code == 200){
          _this.setData({
            songList_favorite:res.data.songEntity
          })
        }
      
      }
    })
  },
  // 跳转播放
  toPlay: function(){
    wx.navigateTo({
      url: '/pages/play/play',
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