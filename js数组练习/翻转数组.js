// 第一种：创建一个新数组使用reverse()的方法进行反转。
let arr = [1,2,3,4]
let arr1 = arr.reverse()
console.log(arr1);  //[4, 3, 2, 1]
// 第二种：利用数组循环，使用unshift()方法将新项添加到数组的开头，
// 并返回新的长度。unshift() 方法会改变数组的长度
let arr2 = [1,2,3,4]
let arr3 = []
arr2.forEach((element) => { 
       arr3.unshift(element)
    })
console.log(arr3);  //[4, 3, 2, 1] 
// 第三种：使用反向循环数组的方法添加至一个新的数组。
let arr4 = [1, 2,3]
let arr5 = []
for (let i = arr4.length-1; i >=0; i--) {
    arr5.push(arr4[i])
}
console.log(arr5);  //[3,2,1]