
//1.利用字面量创建对象
var obj={
    uname:'zhangsan',
    say:function(){
        console.log('我是匿名函数');
    }
}
//两种方式
console.log(obj.uname);//zhangsan
console.log(obj['uname']);//zhangsan
//2.new Object创建对象
//3.利用构造函数  名字首字母要大写
function 构造函数名(参数1,参数2){
    this.属性=参数1;
    this.方法=function(){
    }
}
new 构造函数名()//构造函数不需要return就能返回结果
