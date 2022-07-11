//引入常量
import { HTTP_GET,CONTENT_TYPE_FORM_URLENCODED,CONTENT_TYPE_JSON} from "./consts.js";
//工具函数
import { serialize,addURLData,serializeJSON} from './utils.js';
//默认参数
import DEFAULTS from'./defaults.js';
//Ajax类
class Ajax{
    constructor(url,options){
        //把url保存到这个类，否则url就只是在这个构造函数中
        this.url=url;
        this.options=Object.assign({},DEFAULTS,options)
        //初始化
        this.init();
        
    }
    //初始化
    init(){
        const xhr=new XMLHttpRequest();
        this.xhr=xhr;
        this.bindEvents();
        xhr.open(this.options.method,this.url+this.addParam(),true);
        //设置绑定事件
        this.bindEvents();
        //设置responsetype
        this.setResponseType();
        //设置跨域是否携带cookie
        this.setCookie();
        //设置超时
        this.setTimeout();
        //发送请求
        this.sendData();
        
    }
    //绑定响应事件处理函数
    bindEvents(){
        const xhr=this.xhr;
        const {success,httpCodeError,error,abort,timeout}=this.options
        xhr.addEventListener(
            'load',
            ()=>{
            if(xhr.readyState!=4) retuen;
            if(this.OK())
            {
               success(xhr.respose,xhr)
            }
            else{
                httpCodeError(xhr.status,xhr)
            }
            },
            false
        );
        //error 请求遇到错误将触发error事件
        xhr.addEventListener(
            'error',
            ()=>{
               error(xhr)
            },false
        );
       //abort 
       xhr.addEventListener(
        'abort',
        ()=>{
           abort(xhr)
        },false
        );
        //timeout
        xhr.addEventListener(
            'timeout',
            ()=>{
               timeout(xhr)
            },false
       );
    };
    
    //检测响应的HTTP状态码是否正常
    OK(){
        const xhr=this.xhr;
        (xhr.status>=200)&(xhr.status<300)||xhr.status===304
    };
    //在地址上添加数据
    addParam(){
        const {params}=this.options;
        if(!params) return '';
        return addURLData(this.url,serialize(params))
    }
    //设置responseType
    setResponseType(){
        this.xhr.responseType=this.options.responseType;

    }
    //设置跨域是否携带cookie
    setCookie(){
        if(this.options.withCredentials){
            this.xhr.withCredentials=true;
        }
    };
    //设置超时
    setTimeout(){
        const {timeoutTime}=this.options;
        if(timeoutTime>0){
            this.xhr.timeout=timeoutTime
        }
    };
    //发送请求
    sendData(){
        //如果执行说明没有传输数据
        const xhr=this.xhr;
        if(!this.isSendData()){
            return xhr.send(null);
        }
        let resultData=null;
        const {data}=this.options
        //是否发送formdata格式的数据
        if(this.isFormData()){
            resultData=data;
        }else if(this.isFormURLEncodedData()){
            //发送application/
            // x-www-form-urlencoded格式的数据
            this.setContentType(CONTENT_TYPE_FORM_URLENCODED)
            resultData=serialize(data);
        }else if(this.isJSONData()){
            this.setContentType(CONTENT_TYPE_JSON)
            resultDataJSON=serialize(data);
        }else{
            //发送其他格式的数据
            this.setContentType()
            resultData=data;
        }
        xhr.send(resultData);
    };
    isSendData(){
        const {data,method}=this.options;
        if(!data) return false;
        if(method.toLowerCase()===HTTP_GET.toLocaleLowerCase()) return false;
        return true;
    }
    //是否发送FormData格式的数据
    isFormData(){
        return this.options.data instanceof FormData
    }
    //是否发送发送application/x-www-form-urlencoded格式的数据
    isFormURLEncodedData(){
        return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_FORM_URLENCODED)
    }
    //是否发送application/json格式的数据
    isJSONData(){
        return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_JSON)
    }
    //设置contenttype
    setContentType(contentType=this.options.contentType){
        if(!contentType) return;
        this.xhr.setRequestHeader('Content-Type',contentType)
    }
    //获取XHR对象
    getXHR(){
       return this.xhr; 
    }
}
export default Ajax;