// 第一种：双重for循环去重
// 原理 两两比较如果相等的话就删除第二个 
function noRepeat1(arr){
    // 第一层for用来控制循环的次数
    for(var i=0; i<arr.length; i++){
        //第二层for 用于控制与第一层比较的元素
        for(var j=i+1; j<arr.length; j++){
            //如果相等
            if(arr[i] == arr[j]){
                //删除后面的 即第 j个位置上的元素  删除个数 1 个
                arr.splice(j,1);
                //j--的原因是 每次使用splice删除元素时 返回的是一个新的数组 
                // 这意味这数组下次遍历时跳过了一个元素
                j--;
            }
        }
    }
    return arr;
}

// 方法二：单层for循环，多了一个sort函数
function norepeat(arr){
    arr.sort();
    //先排序让大概相同的在一个位置，这里为什么说是大概相同 是因为sort排序
    //是把元素当字符串排序的 它和可能排成 1 1 10 11 2 20 3 ... 不是我们想要的从小到大
    for(var i = 0; i < arr.length-1;i++){
    //还是两两比较 一样删除后面的
        if(arr[i]==arr[i+1]){
            arr.splice(i,1);
            //i-- 和j--同理
            i--;
        }
    }
    return arr;
}

// 方法三 原理：用一个空数组去存首次出现的元素 
// 利用 indexOf 属性 indexOf是返回某个指定的字符在字符串中出现的位置，如果没有就会返回-1 
function noRepeat2(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) == -1){
                    //如果新数组里没有就放进去，有就放不进了
                    newArr.push(arr[i]);
            }
    }
    return newArr;
}

// 方法四：利用对象
// 原理：利用对象的思想 如果对象里没有这个属性的话就会返回undefined 
// 利用这个原理当返回的是undefined时 让其放入数组 然后在给这个属性赋值
function norepeat3(arr) {
    var obj = {};
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(obj[arr[i]] == undefined) {
            newArr.push(arr[i]);
            obj[arr[i]] = 1;
        }
    }
    return newArr;
}


// 方法五 有点类似方法一，只不过不是删除而是设置为0
// 原理：循环比较如果相等的让后面的元素值为0 最后在输出的时候删除为0的 这个前提是你的数据里不能有0 
// 但是凡事可以变通你可以设置任何值替代这个0 这个方法是我当时想到实现的所以没有进行很好的优化
var newArr = [];
var arr=[1,2,3,4,5,3,7,8];
    //控制外循环
    for(var i=0; i<arr.length;i++){
        //内存循环 只比较后面的
        for(j=i+1;j<arr.length;j++){
            //如果相等就让其值等于0
            if(arr[i]==arr[j]){
                arr[j]=0;
            }
        }
        //去除值为0的
        if(arr[i]==0){
            continue;
        }else{
            //放入新的数组
            newArr.push(arr[i]);
        } 
    }
 
console.log(newArr);
