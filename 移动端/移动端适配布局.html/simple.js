(function(){
    'use strict';
    setRemUnit();
    window.addEventListener('resize',setRemUnit);
    function setRemUnit(){
        docEl=document.documentElement;
        var ratio=18.75;
        var viewWidth=docEl.getBoundingClientRect().width||window.innerWidth
        docEl.style.fontSize=viewWidth/ratio+'px';
    }
    console.log(11);
})()