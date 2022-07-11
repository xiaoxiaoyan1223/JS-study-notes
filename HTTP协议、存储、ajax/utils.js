//工具函数
//数据序列化成urlencoded格式的字符串
const serialize=param=>{
    const results=[];
    for (const[key,value] of Object.entries(param)){
        results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        //['key1=value1','key2=value2']
    }
    return results.join('&');//key1=value1&key1=value1
}
//数据序列化为JSON格式的字符串
const serializeJSON=param=>{
    return JSON.stringify(param)
}
//给URL添加参数
//www.imooc.com?word-=js&
const addURLData=(url,data)=>{
    if(!data) return '';
    const mark=url.includes('?')?'&':'?';
    return `${mark}${data}`
}
export {serialize,addURLData,serializeJSON}