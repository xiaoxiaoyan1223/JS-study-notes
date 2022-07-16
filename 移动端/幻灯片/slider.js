
        function Slider(el,options){
            var defaults={
                initIndex:0,
                speed:300,
                hasIndicator:false,
            }
            //挂在this上才能共用
            this.options={}
            this.options.initIndex=typeof options.initIndex!=='undefined'?options.initIndex:defaults
            this.options.speed=typeof options.speed!=='undefined'?options.speed:defaults
            this.options.hasIndicator=typeof options.hasIndicator!=='undefined'?options.hasIndicator:defaults
            this.el=el
            this.itemContainer=el.querySelector('.slide-item-container')
            this.items=this.itemContainer.children
            this.distancePerSlide=this.items[0].offsetWidth
            this.minIndex=0
            this.maxIndex=this.items.length-1
            // this.index=this.options.initIndex
            // 校正
            this.index=this._adjustIndex(this.options.initIndex)
            this.move(this.getDistanceByIndex(this.index))
            if(this.options.hasIndicator){
                this._createIndicators()
                this._setIndicatorActive(this.index)
            }
        }
        Slider.prototype.to=function(index,cb){
            this.index=index
            this._setTransitionSpeed(this.options.speed)
            this.move(this.getDistanceByIndex(this.index))
            var self=this;
            this.itemContainer.addEventListener('transitionend',function(){
                if(typeof cb==='function'){
                    cb()
                }
                self._setTransitionSpeed(0)
            },false)
            if(this.hasIndicator){
                this._setIndicatorActive(this.index)
            }
        }
        Slider.prototype._setTransitionSpeed=function(speed){
            this.itemContainer.style.transitionDuration=speed+'ms'
        }
        Slider.prototype.pre=function(cb){
            this.to(this.index-1,cb)
        }
        Slider.prototype.nex=function(cb){
            this.to(this.index+1,cb)
        }
        Slider.prototype._adjustIndex=function(index){
            if(index<this.minIndex){
                index=this.minIndex
            }else if(index>maxIndex){
                index=this.maxIndex
            }
            return index
        }
        Slider.prototype.move=function(distance){
            this.itemContainer.style.transform='translate3d('+distance+'px,0,0)';
        }
        Slider.prototype.getDistanceByIndex=function(index){
            return index*this.distancePerSlide
        }
        Slider.prototype._createIndicators=function(){
            var indicatorContainer=document.createElement('div');
            indicatorContainer.className='slider-indicator-container'
            var html='';
            for(var i=0;i<this.maxIndex-1;i++){
                html+='<span class="slider-indicator"></span>'
            }
            indicatorContainer.innerHTML=html;
            this.el.appendChild(indicatorContainer)
        }
        Slider.prototype._setIndicatorActive=function(index){
            this.indicators=this.indicators||this.el.querySelectorAll('.slider-indicator')
            for(var i=0;i<indicators.length;i++){
                this.indicators[i].classList.remove('slider-indicator-active')
            }
            this.indicators[index].classList.add('slider-indicator-active')
        }
        Slider.prototype.getItemContainer=function(){
            return this.itemContainer;
        }
        Slider.prototype.getIndex=function(){
            return this.index
        }
        Slider.prototype.getDistancePerSlider=function(){
            return this.distancePerSlider
        }

    
    
        var slider=new Slider(document.getElementById('slider'),{
            initIndex:1,
            speed:300,
            hasIndicator:true,
        })
        document.getElementById("pre").addEventListener('click',function(){slider.pre(),false})
        document.getElementById("nex").addEventListener('click',function(){slider.nex(),false})
    