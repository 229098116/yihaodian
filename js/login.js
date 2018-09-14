//头部下拉菜单

$(function(){
	$(".help").hover(function(){
		$(".menu1").show();
	},function(){
		$(".menu1").hide();
	})
})

//输入框


//自动登录
$(function(){
	$(".mob-foot a").hover(function(){
		$(this).parent().css("background","url(img/loadTrue.png) no-repeat 0px 1px")
	},function(){
		$(this).parent().css("background","url(img/loadFalse.png) no-repeat 0px 1px")
	})
	
	$(".mob-foot a").toggle(function(){
		$(this).css("background","url(img/tick.png)no-repeat 1px 2.5px ")
		$(this).next().show();
	},function(){
		$(this).css("background","none")
		$(this).next().hide();
	})
})


//更多合作
$(function(){
	$("#more").toggle(function(){
		$(".join-2").show()
		$("#more i").css("background","url(img/i_up.gif) no-repeat 0px 10px")
	},function(){
		$(".join-2").hide()
		$("#more i").css("background","url(img/i_down.gif) no-repeat 0px 10px")
	})
	
})
