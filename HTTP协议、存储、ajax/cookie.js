//写入Cookie
const set=(username,value,{Maxage,domain,path,secure}={})=>{
    let cookieText=`${encodeURIComponent(username)}=${encodeURIComponent(value)}`;
    if(typeof Maxage==='number')
    {
        cookieText+=`; max-age=${Maxage}`;
    }
    if(domain)
    {
        cookieText+=`; domain=${domain}`;
    }
    if(path)
    {
        cookieText+=`; path=${path}`;
    }
    if(secure)
    {
        cookieText+=`; secure`;
    }
    document.cookie=cookieText;
}
//把它暴露出去


//通过cookie获取username的值
const get=username=>{
    username=`${encodeURIComponent(username)}`;
    const cookies=document.cookie.split("; ");
    for(const item of cookies){
        const [cookieName,cookievaule]=item.split("=");
        if(cookieName===username)
        {
            return decodeURIComponent(cookievaule);
        }
    }
    return;
    
}


//根据name、domain、和path删除Cookie
const remove=(username,{domain,path}={})=>{
    set(username,'',{domain,path,Maxage:-1})
}
export {set,get,remove};
