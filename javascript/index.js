

$(function(){
	
	//创建swiper对象
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical',
		// 如果需要分页器
		pagination: '.swiper-pagination',
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		},
		onSlideChangeStart: function(swiper){
	    	console.log(mySwiper.activeIndex);
	    	
	    	var index = mySwiper.activeIndex;
	    	
	    	if (index >= 2 && index < 8 ){
	    		$("#myTitle-top").show();
	    	}else {
	    		$("#myTitle-top").hide();
	    	}
	    	
	    }
	})    
	
	
	//音乐播放/涨停
	var audio = document.querySelector("audio");
	audio.play();  //默认为开启状态
	$("#musicBox").on("click", function(event){
		var e = event || window.event;
		e.stopPropagation();
		e.preventDefault();
		
		if (audio.paused){  //如果是暂停状态，点击后播放
			audio.play();
			$(this).children(".musicGif").show();
		}
		else{   //如果是播放状态，点击后暂停
			audio.pause();
			$(this).children(".musicGif").hide();
		}
	})

})
