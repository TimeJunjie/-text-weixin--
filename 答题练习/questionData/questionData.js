var questionList = [{
  type:"单选题",
  question: "在文档上输出  'Hello World' 的正确 Javascript 语法是？",
  
  items: [
    { value: "0", name: "('Hello World')", checked: false },
    { value: "0", name: "Hello World", checked: false },
    { value: "0", name: "response.write('Hello World')", checked: false },
    { value: "1", name: "document.write('Hello World')", checked: false }
  ],
  answer:"B",
}, 
{
  type: "单选题",
  question: "这是第2题，AngularJS1中指定控制器的是哪个指令？",
    items: [
    { value: "0", name: "ng-route", checked: false },
    { value: "0", name: "ng-template", checked: false },
    { value: "0", name: "ng-model", checked: false },
    { value: "1", name: "ng-controller", checked: false }
  ],
    answer: "B",},
  {
    type: "单选题",
    question: "这是第三题，在文档上输出  'Hello World' 的正确 Javascript 语法是？",
     items: [
      { value: "0", name: "('Hello World')", checked: false },
      { value: "0", name: "Hello World", checked: false },
      { value: "0", name: "response.write('Hello World')", checked: false },
      { value: "1", name: "document.write('Hello World')", checked: false }
    ],
    answer: "A",
  }, 
  {
    type: "单选题",
    question: "这是第四题在文档上输出  'Hello World' 的正确 Javascript 语法是？",
     items: [
      { value: "0", name: "('Hello World')", checked: false },
      { value: "0", name: "Hello World", checked: false },
      { value: "0", name: "response.write('Hello World')", checked: false },
      { value: "1", name: "document.write('Hello World')", checked: false }
    ],
    answer: "A",
    
  }, 
  {
    type: "单选题",
    question: "这是第五题在文档上输出  'Hello World' 的正确 Javascript 语法是？",
    items: [
      { value: "0", name: "('Hello World')", checked: false },
      { value: "0", name: "Hello World", checked: false },
      { value: "0", name: "response.write('Hello World')", checked: false },
      { value: "1", name: "document.write('Hello World')", checked: false }
    ],
    answer: "A",
  }
]

// 接口以对象并赋值的形式
module.exports = {
  questionList: questionList
}