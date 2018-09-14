//头部下拉菜单

$(function(){
	$(".help").hover(function(){
		$(".menu1").show();
	},function(){
		$(".menu1").hide();
	})
})

//用户名输入框
$(function(){
	$(".name").click(function(){
		$(this).find("span").css("left","-62px")
	})
})

$(function(){
	$(".name input").focus(function(){
		
		
		
		$(".name").next().fadeIn();
		$(".name").next().next().hide();
		$(".name").next().next().next().hide();
	}).blur(function(){
		//校验
		var name=$(this).val();
		var regname=/^[A-Za-z0-9\u4e00-\u9fa5]{4,20}$/;
		if(regname.test(name) == false){
			$(".name").next().hide();
			$(".name").next().next().fadeIn();
			$(".name").next().next().next().hide();
			$(".name").css("border","1px solid red");
		}else{
			$(".name").next().hide();
			$(".name").next().next().hide();
			$(".name").next().next().next().fadeIn();
			$(".name").css("border","1px solid #dedede");
		}
	})
	
	
})

//电话输入框

$(function(){
	$(".phone").click(function(){
		$(this).find("span").css("left","-62px")
	})
})

//检验
$(function(){
	$(".phone input").focus(function(){

	
		
		$(".phone").next().fadeIn();
		$(".phone").next().next().hide();
		$(".phone").next().next().next().hide();
	}).blur(function(){
		//校验
		var phone=$(this).val();
		var regphone=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		if(regphone.test(phone) == false){
			$(".phone").next().hide();
			$(".phone").next().next().fadeIn();
			$(".phone").next().next().next().hide();
			$(".phone").css("border","1px solid red");
		}else{
			$(".phone").next().hide();
			$(".phone").next().next().hide();
			$(".phone").next().next().next().fadeIn();
			$(".phone").css("border","1px solid #dedede");
		}
	})
	
	
})

//短信验证输入框

$(function(){
	$(".passage").click(function(){
		$(this).find("span").css("left","-91px")
	})
})



//密码输入框
$(function(){
	$(".password").click(function(){
		$(this).find("span").css("left","-77px")
	})
})

//检验密码格式
$(function(){
	$(".password input").focus(function(){
				
		$(".password").next().fadeIn();
		$(".password").next().next().hide();
		$(".password").next().next().next().hide();
	}).blur(function(){
		//校验
		var psw=$(this).val();
		var regpsw=/^.{6,20}$/;
		if(regpsw.test(psw) == false){
			$(".password").next().hide();
			$(".password").next().next().fadeIn();
			$(".password").next().next().next().hide();
			$(".password").css("border","1px solid red");
		}else{
			$(".password").next().hide();
			$(".password").next().next().hide();
			$(".password").next().next().next().fadeIn();
			$(".password").css("border","1px solid #dedede");
		}
	})
	
	
})


//第二次输入密码

$(function(){
	$(".repassword").click(function(){
		$(this).find("span").css("left","-77px")
	})
})


$(function(){
	$(".repassword input").focus(function(){
				
		$(".repassword").next().fadeIn();
		$(".repassword").next().next().hide();
		$(".repassword").next().next().next().hide();
	}).blur(function(){
		//校验
						
		if($(this).val() != $(".password input").val()){
			$(".repassword").next().hide();
			$(".repassword").next().next().fadeIn();
			$(".repassword").next().next().next().hide();
			$(".repassword").css("border","1px solid red");
		}else{
			$(".repassword").next().hide();
			$(".repassword").next().next().hide();
			$(".repassword").next().next().next().fadeIn();
			$(".repassword").css("border","1px solid #dedede");
		}
		
	})
	
	
})