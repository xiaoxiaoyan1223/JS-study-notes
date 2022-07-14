//localStorage中key 和value 只能是字符串类型  封装后也可以传数组、对象
const storage=window.localStorage;

//设置
const set=(key,value)=>{
    //
    storage.setltem(key,JSON.stringify(value));
}
//获取
const get=key=>{
    return JSON.parse(storage.getItem(key));
}
//移除
const remove=key=>{
    storage.removeItem(key);
}

//清除
const clear=()=>{
    storage.clear(key);
}