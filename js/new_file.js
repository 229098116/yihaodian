//头顶广告
$(function(){
	$(".topest").hover(function(){
		$("#t1").slideDown(1000)
		$("#t2").slideUp(1000)
	},function(){
		$("#t1").slideUp(1000)
		$("#t2").slideDown(1000)
	})
	
	$("#close2").click(function(){
		$(".topest").remove()
	})
})


//广告
$(function(){
	$("#close1").click(function(){
		$(".guanggao").hide()
	})
})


$(function(){
	$("#help").hover(function(){
		$(".menu5-slide").show();
		$(this).css("background-color","white")
	},function(){
		$(".menu5-slide").hide();
		$(this).css("background-color","#f4f4f4")
	})
})


$(function(){
	$(".nav-box li").hover(function(){
		$(this).addClass("white");
		$(this).find("div").show();
	},function(){
		$(this).removeClass("white");
		$(this).find("div").hide();
	})
})



$(function(){
	
	$(".adver").hover(function(){
		$(".arrowLeft").show();
		$(".arrowRight").show();
	},function(){
		$(".arrowLeft").hide();
		$(".arrowRight").hide();
	})
	var arr = new Array("url(img/adver01.jpg)","url(img/adver02.jpg)","url(img/adver03.jpg)")
	var num = 0;
	//点击左箭头
	$(".arrowLeft").click(function(){
		num=num-1;
		if(num<0){num=2};
		$(".adver").css("background",""+arr[num]+"");
		$(".adver li").css("backgroundColor","#333333");
		$(".adver li").eq(num).css("backgroundColor","orange");
		time=num;
		
		
	})
	//点击右箭头
	$(".arrowRight").click(function(){
		num=num+1;
		if(num>2){num=0};
		$(".adver").css("background",""+arr[num]+"");
		$(".adver li").css("backgroundColor","#333333");
		$(".adver li").eq(num).css("backgroundColor","orange");
		time=num;
		
	})
	
	//鼠标移动到数字上
	$(".adver li").mouseover(function(){
		//终止定时器
		clearInterval(lunbo);
		var a=$(this).html();
		$(".adver").css("background",""+arr[a-1]+"");
		$(".adver li").css("backgroundColor","#333333");
		$(".adver li").eq(a-1).css("backgroundColor","orange");
		time=a;
	    num=a;
		
	}).mouseout(function(){
    //开启定时器
    	lunbo =setInterval(time1,3000);
    });
	
	
	//自动轮播
	var time= 0
	function time1(){
		time=time+1;
		if(time>2){time=0;}
		
		$(".adver").css("background",""+arr[time]+"");
		$(".adver li").css("backgroundColor","#333333");
		$(".adver li").eq(time).css("backgroundColor","orange");
	}
	
	var lunbo =setInterval(time1,3000);
	//鼠标放在左右箭头停止轮播
	    $(".arrowLeft,.arrowRight").mouseover(function(){
		    //终止轮播定时器
    		clearInterval(lunbo);
		}).mouseout(function(){
			//开启定时器
    		lunbo =setInterval(time1,3000);
		});
	
})

//价钱加边框
$(function(){
	$(".price").hover(function(){
		$(this).find("strong").css({"border":"1px solid red","font-size":"20px"});
	},function(){
		$(this).find("strong").css({"border":"none","font-size":"18px"})
	})
	
})


//shopping2 
//箭头出现
$(function(){
	$(".shopping2").hover(function(){
		$(".Left").show();
		$(".Right").show();
	},function(){
		$(".Left").hide();
		$(".Right").hide();
		
	})
})

//点击左箭头
var num=0;
$(function(){
	$(".Left").click(function(){
		
		num=num-1;
		if(num<0){num=3}
		$(".show0"+num).fadeIn();
		$(".show0"+num).siblings().hide();
	})
})
//右箭头
$(function(){
	$(".Right").click(function(){
		
		num=num+1;
		if(num>3){num=0}
		$(".show0"+num).fadeIn();
		$(".show0"+num).siblings().hide();
		
	})
	
	//自动轮播
	var time= 0
	function time1(){
		time=time+1;
		if(time>3){time=0;}
		
	    $(".show0"+time).fadeIn();
		$(".show0"+time).siblings().hide();
	}
	
	var lunbo =setInterval(time1,3000);
	//鼠标放在左右箭头停止轮播
	    $(".Left,.Right").mouseover(function(){
		    //终止轮播定时器
    		clearInterval(lunbo);
		}).mouseout(function(){
			//开启定时器
    		lunbo =setInterval(time1,3000);
		});
	
})




//third
$(function(){
	$(".third-center td").hover(function(){
		$(this).css("border","solid 2px red");
		$(this).find("span").addClass("red")
		$(this).find("img").css({"padding-left":"6px","overflow":"hidden"})
	},function(){
		$(this).css("border","solid 2px #333333");
		$(this).find("span").removeClass("red")
		$(this).find("img").css("padding","0px")
	})
})


//four
$(function(){
	$(".four-center td").hover(function(){
		$(this).css("border","solid 2px red");
		$(this).find("span").addClass("red")
		$(this).find("img").css({"padding-left":"6px","overflow":"hidden"})
	},function(){
		$(this).css("border","solid 2px #333333");
		$(this).find("span").removeClass("red")
		$(this).find("img").css("padding","0px")
	})
})
