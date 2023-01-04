//当我们不知道有多少个参数传递的时候，可以用arguments来获取  
// arguments是当前函数的一个内置对象，所有函数都有，arguments对象中存储了传递的所以有实参

//arguments展现形式是一个伪数组，因此可以遍历。伪数组的特点：具有length属性
//                                                       按索引方式存储数据
//                                                       不具有数组的push pop
function fn(){
    console.log(arguments);//里面存储了所有传递过来的实参
}
fn(1,2,3)