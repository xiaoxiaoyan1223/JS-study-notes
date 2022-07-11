//引入常量
import { HTTP_GET } from "./consts.js";
//默认参数
const DEFAULTS={
    method:'GET',
//请求头携带的数据
    params:null,
    // params:{
    //     username:'alex',
    //     age:18
    // }
    // username=alex&age=18
//请求体携带数据
    //方法一
    data:null,
    //方法二
    // data:{
    //     username:'alex',
    //     age:18
    // }
    //方法三
    // data:FormData数据
    contentType:'application/x-www-form-urlencoded',
    responseType:'',
    timeoutTime:0,
    //不携带cookie
    withCredentials:false,
    //方法
    success(){},
    httpCodeError(){},
    //处理出错
    error(){},
    //处理终止
    abort(){},
    timeout(){}
}
export default DEFAULTS;