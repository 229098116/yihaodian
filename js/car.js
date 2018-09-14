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


//购物车显示
$(function(){
	$(".car").hover(function(){
		$(this).find(".shop").show()
	},function(){
		$(this).find(".shop").hide();
	})
})

//购物车删除
$(function(){
	$(".shop-body a").click(function(){
		$(this).parents(".shop-1").remove();
		
	})
})

//购物车数量变化
var total=$(".price0")

$(function(){
	$(".plus").click(function(){
		$(this).prev().val(parseInt($(this).prev().val()) + 1);
		
		
	  
	})
})

$(function(){
	$(".minus").click(function(){
		if($(this).next().val()>1){
		$(this).next().val(parseInt($(this).next().val()) - 1);
		}
	})
})



//薯片

$(function(){
		
	
	//鼠标移动到数字上
	$(".adver li").mouseover(function(){
		
		
		var a=$(this).index();
		
		$(".adver li").css("border","2px solid white");
		$(".adver li").eq(a).css("border","2px solid #ddd");
		$(".datu"+a).show();
		$(".datu"+a).siblings().hide();
		num=a;
	})
	
	//点击左箭头
	var num = 0;
	$(".arrowLeft").click(function(){
		
		num=num-1;
		if(num<0){num=4};		
		$(".adver li").css("border","2px solid white");
		$(".adver li").eq(num).css("border","2px solid #cccccc");
		$(".datu"+num).show();
		$(".datu"+num).siblings().hide();
		
		
		
	})
	//点击右箭头
	$(".arrowRight").click(function(){
		
		num=num+1;
		if(num>4){num=0};		
		$(".adver li").css("border","2px solid white");
		$(".adver li").eq(num).css("border","2px solid #cccccc");
		$(".datu"+num).show();
		$(".datu"+num).siblings().hide();
		
	})
	
	
	

//关注

	$(".like span").hover(function(){
		$(this).addClass("background2")
	},function(){
		$(this).addClass("background1")
		$(this).removeClass("background2")
		
	})
})
