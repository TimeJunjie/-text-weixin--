// pages/play/play.js
var questionData = require("../../questionData/questionData.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
     
     myChecked:0,
     currentValue:null,//当前选择答案
     current:0,//当前题号
     score:0,
     questionList:[],
     nowQuestion:[],
     multiIndex:[{checked:false},{checked:false},{checked:false},{checked:false}]
    //  items:questionData.questionList[0].items
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRandomQuestion();//获取随机问题序列
    // console.log("items");
    // console.log(this.data.item1);
    //获取当前题号
   var current=this.data.current;
   //获取当前题号对应的题目，并更新
   this.setData({nowQuestion:this.data.questionList[current]});//赋值nowQuestion
   console.log("当前题号为"+current+"对应的nowQuestion为：")
   console.log(this.data.nowQuestion);
   console.log("check:"+this.data.myChecked);
    // var myquestion = questionData.questionList[this.data.current].items
    // console.log(myquestion)
    // this.setData({ items: myquestion.items})
    
  
  
  },

 //单选和判断函数，选择选项函数
 selectItem(event){
   
    // console.log("selectId:"+parseInt(event.currentTarget.dataset.selectid));
    if(this.data.nowQuestion.type_id==1||this.data.nowQuestion.type_id==0){
      //type_id为1与0时则进行下列赋值(单选或判断)
      console.log("看看我有没有进入单选判断");
      console.log("id"+this.data.nowQuestion.type_id);
    var selectId =parseInt(event.currentTarget.dataset.selectid);//将携带的参数selectid赋值给selectId
   
        this.setData({//在data数据里更新myChecked的值和当前选择的值
          myChecked: selectId,
          currentValue: selectId
        })
    }else if(this.data.nowQuestion.type_id==2){
      console.log("看看我有没有进入多选");
       console.log("id"+this.data.nowQuestion.type_id);
        var index =event.currentTarget.dataset.index;//获取当前索引
        var selectId =parseInt(event.currentTarget.dataset.selectid);//获取当前选项id
        var multiIndex = this.data.multiIndex;
        multiIndex[index].checked=!multiIndex[index].checked;//单击取反
        if(multiIndex[index].checked){//单击加减赋值
          this.setData({myChecked:this.data.myChecked+selectId})
        }else{this.setData({myChecked:this.data.myChecked-selectId})}
        this.setData({//上传至视图层
          multiIndex:multiIndex,
          currentValue: selectId
        })
        
    }
   },
  // 下一题next_question函数
  next_question(){
    //判断正误
    //获得当前题号
    var num = this.data.current;
    //获得正确答案
    var correct = this.data.questionList[num].answer; 
    // 将ABCD答案转换为数字
    var correctItem = 0; 
    switch(correct){
      case 'A':correctItem=1
      break;
      case 'B':correctItem=10
      break;
      case 'C':correctItem=100
      break;
      case 'D':correctItem=1000
      break;
      case 'AB':correctItem=11
      break;
      case 'AC':correctItem=101
      break;
      case 'AD':correctItem=1001
      break;
      case 'ABC':correctItem=111
      break;
      case 'ABD':correctItem=1011
      break;
      case 'BCD':correctItem=1110
      break;
      case 'ABCD':correctItem=1111
      break;
    }  
    //判断当前选择与答案是否相等
    if(this.data.currentValue===correctItem){
        this.setData({
          //分数加2分
          score:this.data.score+2
          
        })
     
    }
    //下标加1进入下一题
      //判断是否最后一题,解决最后一题无限加分问题
    if (this.data.current >= this.data.questionList.length - 1){
      //为最后一题时，值清零，
      this.setData({
        //多选值清零
        multiIndex:[{checked:false},{checked:false},{checked:false},{checked:false}],
        myChecked: 0,
        //当前选项值清0
        currentValue: 0,
        current:0
      })
      //弹出结果框
      wx.showModal({
        title: '答题结束',
        content: '您的成绩为'+this.data.score,
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: "../begin/begin"
            })
            console.log('用户点击确定')
          } else if (res.cancel) {
            wx.navigateTo({
              url: "../begin/begin"
            })
            console.log('用户点击取消')
          }
        }
      })
    } else if (this.data.current < this.data.questionList.length-1&&(this.data.myChecked!=0 )){
    this.setData({
      //清零当前多选值
      multiIndex:[{checked:false},{checked:false},{checked:false},{checked:false}],
      current: this.data.current + 1,
      //选项圆点清0
      myChecked :0,
      //当前选项值清0
      currentValue:0,
      
    })
    //获取更新后下一题current的值来更新当前题目
    var current=this.data.current;
    this.setData({
      ////更新当前题目
      nowQuestion:this.data.questionList[current]
    })
    console.log("当前题号为"+this.data.current+"对应的nowQuestion为：");
    console.log(this.data.nowQuestion);
   
    }
  },
  //获取随机问题数列
  getRandomQuestion(){
    //随机
    var randomQuestion = questionData.questionList;
    // console.log("未打乱前newQuestion");
    // console.log(randomQuestion);
    randomQuestion.sort(function () { return 0.5 - Math.random(); });
    console.log("打乱后newQuestion");
    console.log(randomQuestion);
    this.setData({
      questionList: randomQuestion
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})