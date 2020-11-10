// pages/singer/singer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allList: [{
        src: '/images/singer/xuezhiqian.jpg',
        name: '薛之谦'
      },
      {
        src: '/images/singer/xusong.jpg',
        name: '许嵩'
      },
      {
        src: '/images/singer/dengziqi.jpg',
        name: 'G.E.M 邓紫棋'
      },
      {
        src: '/images/singer/taile.jpg',
        name: 'Taylor Swift'
      },
      {
        src: '/images/singer/zhangbicheng.jpg',
        name: '张碧晨'
      },
      {
        src: '/images/singer/zhoujielun.jpg',
        name: '周杰伦'
      },
      {
        src: '/images/singer/adaier.jpg',
        name: 'Adele'
      },
      {
        src: '/images/singer/ailun.jpg',
        name: 'Alan Walker'
      },
      {
        src: '/images/singer/aiminamu.jpg',
        name: 'Eminem'
      },
      {
        src: '/images/singer/zhangshaohan.jpg',
        name: '张韶涵'
      },
      {
        src: '/images/singer/xuezhiqian.jpg',
        name: '李荣浩'
      },
      {
        src: '/images/singer/jasiting.jpg',
        name: 'Justin Bieber'
      },
      {
        src: '/images/singer/linjunjie.jpg',
        name: '林俊杰'
      },
    ],
    maleList: [
      {
        src: '/images/singer/xuezhiqian.jpg',
        name: '薛之谦'
      },
      {
        src: '/images/singer/xusong.jpg',
        name: '许嵩'
      },
      {
        src: '/images/singer/zhoujielun.jpg',
        name: '周杰伦'
      },
      {
        src: '/images/singer/ailun.jpg',
        name: 'Alan Walker'
      },
      {
        src: '/images/singer/aiminamu.jpg',
        name: 'Eminem'
      },
      {
        src: '/images/singer/xuezhiqian.jpg',
        name: '李荣浩'
      },
      {
        src: '/images/singer/jasiting.jpg',
        name: 'Justin Bieber'
      },
      {
        src: '/images/singer/linjunjie.jpg',
        name: '林俊杰'
      }
    ],
    femaleList: [
      {
        src: '/images/singer/dengziqi.jpg',
        name: 'G.E.M 邓紫棋'
      },
      {
        src: '/images/singer/taile.jpg',
        name: 'Taylor Swift'
      },
      {
        src: '/images/singer/zhangbicheng.jpg',
        name: '张碧晨'
      },
      {
        src: '/images/singer/adaier.jpg',
        name: 'Adele'
      },
      {
        src: '/images/singer/zhangshaohan.jpg',
        name: '张韶涵'
      },
    ],

    selected: 2,
    allColor: '',
    maleColor: '',
    femaleColor: '',
    allBackground: '',
    maleBackground: '',
    femaleBackground: '',
    interval: '',
    List: ''
  },

  toSingerDetails: function (e) {
    console.log(e.currentTarget.dataset.singer)
    wx.navigateTo({
      url: '/pages/SingerDetails/SingerDetails?singer='+e.currentTarget.dataset.singer,
    })
  },

  all: function (e) {
    var _this = this;
    console.log(e.target.dataset.sex)
    if (e.target.dataset.sex == 2){
      wx.request({
        url: 'http://192.168.43.76:9000/singer/getAllSinger',
        header: {
          "contnet-type": "application/json"
        },
        success(res){
          
          _this.setData({
            selected: 2,
            allColor: '#ffffff',
              allBackground: '#1cbb9b',
              List: res.data.singerEntity,
              maleColor: '#1cbb9b',
              maleBackground: '#ffffff',
              femaleColor: '#1cbb9b',
              femaleBackground: '#ffffff'
          })
        }
      })
      
    }else if(e.target.dataset.sex == 1){
      wx.request({
        url: 'http://192.168.43.76:9000/singer/sexSinger?sex='+e.target.dataset.sex,
        header: {
          "contnet-type": "application/json"
        },
        success(res){
          _this.setData({
            selected: 1,
            allColor: '#1cbb9b',
             allBackground: '#ffffff',
             List: res.data.singerEntity,
             maleColor: '#ffffff',
             maleBackground: '#1cbb9b',
             femaleColor: '#1cbb9b',
             femaleBackground: '#ffffff'              
              
          })
        }
      })
    }else{
      wx.request({
        url: 'http://192.168.43.76:9000/singer/sexSinger?sex='+e.target.dataset.sex,
        header: {
          "contnet-type": "application/json"
        },
        success(res){
          _this.setData({
            selected: 1,
            allColor: '#1cbb9b',
             allBackground: '#ffffff',
             List: res.data.singerEntity,
             maleColor: '#1cbb9b',
             maleBackground: '#ffffff',
             femaleColor: '#ffffff',
             femaleBackground: '#1cbb9b'              
              
          })
        }
      })
    }

    this.onReady();
  },
    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'http://192.168.43.76:9000/singer/getAllSinger',
      header: {
        "contnet-type": "application/json"
      },
      success(res){
        console.log(res.data.singerEntity)
        _this.setData({
          selected: 2,
          allColor: '#ffffff',
            allBackground: '#1cbb9b',
            List: res.data.singerEntity,
            maleColor: '#1cbb9b',
            maleBackground: '#ffffff',
            femaleColor: '#1cbb9b',
            femaleBackground: '#ffffff'
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
    // 歌手性别
    

   

    
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