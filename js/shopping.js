$(function(){
	$("#help").hover(function(){
		$(".menu5-slide").show();
		$(this).css("background-color","white")
	},function(){
		$(".menu5-slide").hide();
		$(this).css("background-color","#f4f4f4")
	})
})

//左边栏
$(function(){
	$(".f1").hover(function(){
		
		$(".nav-box").show();
	},function(){
		$(".nav-box").hide();
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

//品牌
$(function(){
	$("#pandora").hover(function(){
		$(this).css("border","1px solid red")
	},function(){
		$(this).css("border","1px dashed red")
	})
})

//选择类型
$(function(){
	$(".shangpin-2 li").click(function(){
		$(this).css("color","red");
		$(this).siblings().css("color","#666666")
	})
})


//历史选择
$(function(){
	$(".history-1 ul li").hover(function(){
		$(this).css("border","1px solid red")
	},function(){
		$(this).css("border","1px solid #cccccc")
	})
})

$(function(){
	$(".history-1 ul li").click(function(){
		$(this).css({"background":"red","color":"white"})
		$(this).siblings().css({"background":"none","color":"black"});
	})
})

//show
$(function(){
	$(".show-1 ul li").hover(function(){
		$(this).css("border","solid 2px red")
		$(this).find("h4").css({"color":"red","font-weight":"bolder"})
	},function(){
		$(this).css("border","solid 2px #cccccc")
		$(this).find("h4").css({"color":"black","font-weight":"bolder"})
	})
	
	$(".shopcar").hover(function(){
		$(this).css("background","red");
	},function(){
		$(this).css("background","#ff5c4d")
	})
})

//翻页
$(function(){
	$(".turn-page ul li").mouseover(function(){
		$(this).addClass("hot1").removeClass("hot2")
		$(this).siblings().addClass("hot2").removeClass("hot1")

		
	})
})
