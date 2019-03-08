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
     items:questionData.questionList[0].items
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRandomQuestion();
    console.log("items");
    console.log(this.data.items[0]);
    console.log("myquestion");
   var  current=this.current;
   console.log("check:"+this.data.myChecked);
    var myquestion = questionData.questionList[this.data.current].items
    console.log(myquestion)
    // this.setData({ items: myquestion.items})
    
  
  
  },

 //选择选项函数
 selectItem(event){
    // var myChecked = selectId;
    console.log(event);

    console.log("selectId:"+parseInt(event.currentTarget.dataset.selectid));
    var selectId =parseInt(event.currentTarget.dataset.selectid);
    this.setData({
      myChecked: selectId,
      currentValue: selectId
    })
   },
  // 下一题next_question函数
  next_question(){
    //判断正误
    //获得当前题号
    var num = this.data.current;
    //获得正确答案
    var correct = this.data.questionList[num].answer; 
    // 将 答案转换
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
    }  
    
    if(this.data.currentValue===correctItem){
        this.setData({
          score:this.data.score+1
        })
     
    }
    //下标加1进入下一题
    if (this.data.current < this.data.questionList.length-1){
    this.setData({
      current: this.data.current + 1,
      //选项清0
      myChecked :0
    })
    
    }
  },
  //获取随机问题数列
  getRandomQuestion(){
    //随机
    var randomQuestion = questionData.questionList;
    console.log("未打乱前newQuestion");
    console.log(randomQuestion);
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