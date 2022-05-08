function animate(obj,target,callback) {//callback是增加回调函数，当定时器执行完毕后，才执行回调函数中的东西
    //先清除之前的定时器，只保留当前一个定时器执行
    clearInterval(obj.timer);
    //给不同对象添加不同的定时器
    obj.timer=setInterval(function(){
        //var step=(target-obj.offsetLeft)/10 //核心算法
        //step 要取成整数，正数往大了取，负数往小了取
        var step=(target-obj.offsetLeft)/10;
        step=step>0?Math.ceil(step):Math.floor(step);
        if(obj.offsetLeft>=target)
        {
            //停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 判断是否有回调函数，有的话就调用
            if(callback){
                callback();
            }
        }
        //缓动原理   核心算法:(目标位置-现在位置)/10；

        obj.style.left=obj.offsetLeft+step+'px';
    },100);
}