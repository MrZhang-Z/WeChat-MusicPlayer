//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerList:[
      {src:'https://s1.ax1x.com/2020/06/17/NEctUg.jpg'},
      {src:'https://s1.ax1x.com/2020/06/17/NEg9Z8.jpg'},
      {src:'https://s1.ax1x.com/2020/06/17/NEgARs.jpg'},
      {src:'https://s1.ax1x.com/2020/06/17/NEg3W9.jpg'},
      {src:'https://s1.ax1x.com/2020/06/17/NEg6yt.jpg'},
      {src:'https://s1.ax1x.com/2020/06/17/NEgRw8.jpg'}
    ],
    songList:[
      {src:'/images/songs/songs_chuimeng.jpg', title:'吹梦到西洲', name: '恋恋故人难'},
      {src:'/images/songs/songs_cominghome.jpg', title:'Coming Home', name: 'Dash Berlin'},
      {src:'/images/songs/songs_love.jpg', title:'Love Story', name: 'Taylor Swift'},
      {src:'/images/songs/songs_tianxia.jpg', title:'天下', name: '高鱼'},
      {src:'/images/songs/songs_yiran.jpg', title:'易燃易爆炸', name: '陈粒'},
      {src:'/images/songs/songs_huanting.jpg', title:'幻听', name: '许嵩'},
      {src:'/images/songs/songs_ganxie.jpg', title:'感谢你曾经来过', name: 'Ayo97'},
      {src:'/images/songs/songs_jiumeng.jpg', title:'旧梦一场', name: '阿悠悠'},
      {src:'/images/songs/songs_qingtian.jpg', title:'晴天', name: '周杰伦'},
      {src:'/images/songs/songs_remember.jpg', title:'Remember Name', name: 'Fort Minor'},
      {src:'/images/songs/songs_suyan.jpg', title:'素颜', name: '许嵩'},
      {src:'/images/songs/songs_halloffame.jpg', title:'Hall Of Fame', name: 'The Script'},
    ]
  },
  //事件处理函数
  onLoad:function(){
    var _this = this;
    wx.request({
      url: 'http://192.168.43.76:9000/my/findAllSong',
      header: {
        "contnet-type": "application/json"
      },
      success(res){
        console.log(res.data);
        if(res.data.code == 200){
          _this.setData({
            songList:res.data.songEntity
          })
        }
      
      }
    })
  },
  // 跳转歌手
  toSinger: function(){
    wx.navigateTo({
      url: '/pages/singer/singer',
    })
  },
  // 跳转喜欢
  toFavorite: function(){
    wx.navigateTo({
      url: '/pages/favorite/favorite',
    })
  },
  // 跳转推荐
  toRecommend: function(){
    wx.navigateTo({
      url: '/pages/recommend/recommend',
    })
  },
  // 跳转排行榜
  toLeaderboard: function(){
    wx.navigateTo({
      url: '/pages/leaderboard/leaderboard',
    })
  },
  // 跳转播放
  toPlay: function(e){
    console.log(e)
    wx.navigateTo({ 
      url: '/pages/play/play?id='+e.currentTarget.id,
    })
    
  }
})
