Page({
  data: {
    mush:[
      { dataUrl: 'https://sharefs.yun.kugou.com/202006171548/66542da7ee327204277bdca155a785b0/G164/M0B/02/04/RIcBAF1TU0mAKXLVADOpvzc7APU480.mp3', title: 'winter bear', coverImgUrl: 'https://t7.baidu.com/it/u=556041067,536861172&fm=193', name: '金泰亨' },
      { dataUrl: 'https://sharefs.yun.kugou.com/202006171549/22129f6d8d2c023719d32b1d489c849c/G127/M02/18/0B/H4cBAFscmJqACWOHACww0wRD5Mc541.mp3', title: 'Dont touch me', coverImgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2354483743,3208850160&fm=15&gp=0.jpg',name:'张颜齐'  },
      { dataUrl: 'https://sharefs.yun.kugou.com/202006171547/b3d434700ed975abd05ca4493ec8a3c3/G153/M0B/1D/05/OYcBAFyLVn-ATO2eADolqrquAMk238.mp3', title: '第十二颗星', coverImgUrl: 'http://t9.baidu.com/it/u=2639391635,2112965642&fm=193', name:' Wanna One' },
      { dataUrl: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_62764014&response=res&type=convert_url&', title: 'Rocky Boy', coverImgUrl: 'https://wx1.sinaimg.cn/thumb180/007IRkgoly1ge8fxy7avwj30uw0u0e81.jpg', name:'张颜齐' }
    ],
    number:'0',
    interval:'',
    widthx:'0',
    duration:'',
    playback:'',
    play:false,
    bgmusic:'',
    detailObj:{},
    index:null,
    // 是否收藏
    isCollected:false
  },
  handleCollection(){
    let isCollected = !this.data.isCollected
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected
    })
    //提示用户
    wx.showToast({
        title: isCollected ? '收藏成功' : '取消收藏',
        icon:'success'
    })

    let { index } = this.data;
    //首先去看一下缓存的数据
    wx.getStorage({
      key:'isCollected',
      success:(data)=>{
        let obj = data.data;
        //如果有,则刷新,没有则追加
        obj[index] = isCollected;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {

          }
        });
      }
    })
    let detailStorage  = wx.getStorageSync('isCollected')
    //如果没有收藏
    if (!detailStorage){
      //初始化一个空的对象
      wx.setStorageSync('isCollected', {});
    }
    //如果收藏了
    if (detailStorage[index]){
      this.setData({
        isCollected: true
      })
    }
  },
  
  onShow:function(e){
    let that = this
    setTimeout(function () {  
      that.data.bgmusic.pause();
    },1000)
  },
  onLoad: function (options) {
    let that = this
    wx.playBackgroundAudio({
      dataUrl: that.data.mush[that.data.number].dataUrl,
      title: that.data.mush[that.data.number].title,
      coverImgUrl: that.data.mush[that.data.number].coverImgUrl,
    })
    that.setData({
      bgmusic: wx.getBackgroundAudioManager()
    })
    that.data.bgmusic.play();
    setTimeout(function () {  
      if (getCurrentPages().length != 0) {
        getCurrentPages()[getCurrentPages().length - 1].scheduled()
      }
    },300)
  },
  music:function(e){
    let that = this
    if(!that.data.play){
      that.data.bgmusic.play();
      if (getCurrentPages().length != 0) {
        getCurrentPages()[getCurrentPages().length - 1].scheduled()
      }
    }else{
      that.data.bgmusic.pause();
      clearInterval(that.data.interval)
    }
    that.setData({
      play: !that.data.play,
    })
  },
  song:function(e){
    let that = this
    let song = e.currentTarget.dataset.song
    if(song == 'next'){
      if (that.data.number < (that.data.mush.length-1)){
        that.data.number++
      }else{
        that.data.number = 0
      }
    } else if (song == 'last'){
      if (0 < that.data.number) {
        that.data.number--
      } else {
        that.data.number = (that.data.mush.length - 1)
      }
    }else{
      wx.showToast({
        title: '系统异常~',
        icon: 'none',
        duration: 3000
      })
    }
    that.setData({
      number: that.data.number,
      play: true,
      widthx: '0',
      duration:'',
    })
    if (getCurrentPages().length != 0) {
      getCurrentPages()[getCurrentPages().length - 1].onLoad()
    }
  },

  scheduled: function (e) {
    let that = this
    that.data.interval = setInterval(function () {
      let a = '00'
      let b = '00'
      wx.getBackgroundAudioPlayerState({
        success(res) {
          if (res.status == '2' && that.data.widthx == '100.00') {
            if (that.data.number < (that.data.mush.length - 1)) {
              that.data.number++
            } else {
              that.data.number = 0
            }
            that.setData({
              number: that.data.number,
              play: true,
              widthx: '0',
              duration: '',
            })
            if (getCurrentPages().length != 0) {
              getCurrentPages()[getCurrentPages().length - 1].onLoad()
            }
          }
          that.data.widthx = (res.currentPosition / (res.duration / 100)).toFixed(2)
          if (res.currentPosition > 59) {
            a = parseInt(res.currentPosition / 60) ? parseInt(res.currentPosition / 60) : '00'
            b = res.currentPosition - (a * 60) ? res.currentPosition - (a * 60) : '00'
          } else {
            a = '00'
            b = res.currentPosition ? res.currentPosition : '00'
          }
          a == undefined ? '00' : a
          if (JSON.stringify(a).length < 2) {
            a = '0' + JSON.stringify(a)
          }
          b == undefined ? '00' : b
          if (JSON.stringify(b).length < 2) {
            b = '0' + JSON.stringify(b)
          }
          that.data.play = res.status == 1 ? true : false
          if (that.data.duration == '' || that.data.duration == '00:00') {
            let c = parseInt(res.duration / 60) ? parseInt(res.duration / 60) : '00'
            let d = res.duration - (c * 60) ? res.duration - (c * 60) : '00'
            if (JSON.stringify(c).length < 2) {
              c = '0' + JSON.stringify(c)
            }
            if (JSON.stringify(d).length < 2) {
              d = '0' + JSON.stringify(d)
            }
            that.setData({
              duration: c + ':' + d,
            })
          }
          that.setData({
            widthx: that.data.widthx,
            playback: a + ':' + b,
            play: that.data.play,
          })
        }
      })
    }, 300)
  },
})