   
$(function(){

addEventListener('orientationchange', function() {
	//先重新计算rem跟屏幕宽度,然后再刷新
	(function page_first() {
		document.addEventListener('DOMContentLoaded', function() {
			document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 10 + 'px';
		}, false);
	}());
	location.reload(false);
});
	
(function(){
	// var i=0;
		var $nav_li01 = $(".nav_li01")
	var $hioki_nav_down = $(".nav_ul_down")
			var timeoutIds = {
			   0: { up: null, down: null },
			   1: { up: null, down: null },
			   2: { up: null, down: null }
	}
			var showInd = 100;
	$nav_li01.hover(function() {
		var i = $nav_li01.index($(this));
		show(i);
	}, function() {
		var i = $nav_li01.index($(this));
		hide(i);
	});

	$hioki_nav_down.hover(function(){
		var i = $hioki_nav_down.index($(this));
		show(i);
	},function(){
		var i = $hioki_nav_down.index($(this));
		hide(i);
	})

	function show(i){	
			  if (showInd != i) {
				 showInd = i
				 if (timeoutIds[i].down) clearTimeout(timeoutIds[i].down) 
				 if (timeoutIds[i].up) clearTimeout(timeoutIds[i].up) 
				 timeoutIds[i].down = setTimeout(function() {
		$hioki_nav_down.eq(i).stop().slideDown(300);
				 }, 250)
	  }
	}
	function hide(i){
			  if (showInd == i) {
				 if (timeoutIds[i].up) clearTimeout(timeoutIds[i].up) 
				 if (timeoutIds[i].down) clearTimeout(timeoutIds[i].down) 
				 timeoutIds[i].up = setTimeout(function() {
				 $hioki_nav_down.eq(i).stop().slideUp(300);
				 }, 250)
				 showInd = 100
			  }
	}
})();
	

$(".nav_ul li span.sp_unfold").click(function(){
	if($(this).hasClass("open")) {
		$(this).removeClass("open");
		$(".products_spdown").slideUp();
		$(this).next().slideUp();
	} else {
		$(".nav_ul li span.sp_unfold").removeClass("open");
		$(this).addClass("open");
		$(".products_spdown").slideUp();
		$(this).next().slideDown();
	}
});

$(".news_nav li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	e=$(".news_nav li").index($(this));
	$(".news_nav_list li").eq(e).show().siblings().hide();
});
	
	$(".fixed_tel").hover(function(){
		$("#tel_s1").fadeOut();
		$("#tel_s2").fadeIn();
	},function(){
		$("#tel_s1").fadeIn();
		$("#tel_s2").fadeOut();
	});

	$(".fixed_email").hover(function(){
		$("#email_s1").fadeOut();
		$("#email_s2").fadeIn();
	},function(){
		$("#email_s1").fadeIn();
		$("#email_s2").fadeOut();
	});

	$(".fixed_contact .fixed_wx").click(function(){
		$(".fix_wx_code").fadeIn(500);
	});

	$(".wx_sp").click(function(){
		$(".fix_wx_code").fadeIn(500);
	});

	$(".fix_wx_code p span").click(function(){
		$(".fix_wx_code").fadeOut(500);
	});

	$("#tel_sp").click(function(){
		$(".fix_tel_sp").fadeIn(500);
	});

	$("#close_sp").click(function(){
		$(".fix_tel_sp").fadeOut(500);
	});


	$(".mainstream_list .mainstream_icon img").hover(function(){
		$(this).css({"transform":"scale(1.7,1.7)"});
	},function(){
		$(this).css({"transform":"scale(1,1)"});
	});



	(function(){
		// var i=0;
	        var $nav_li01 = $(".nav_li01")
		var $hioki_nav_down = $(".items_li_num")
                var timeoutIds = {
                   0: { up: null, down: null },
                   1: { up: null, down: null },
                   2: { up: null, down: null }
		}
                var showInd = 100;
		$nav_li01.hover(function() {
			var i = $nav_li01.index($(this));
			show(i);
		}, function() {
			var i = $nav_li01.index($(this));
			hide(i);
		});

		$hioki_nav_down.hover(function(){
			var i = $hioki_nav_down.index($(this));
			show(i);
		},function(){
			var i = $hioki_nav_down.index($(this));
			hide(i);
		})

		function show(i){	
                  if (showInd != i) {
                     showInd = i
                     if (timeoutIds[i].down) clearTimeout(timeoutIds[i].down) 
                     if (timeoutIds[i].up) clearTimeout(timeoutIds[i].up) 
                     timeoutIds[i].down = setTimeout(function() {
			$hioki_nav_down.eq(i).stop().slideDown(300);
                     }, 250)
		  }
		}
		function hide(i){
                  if (showInd == i) {
                     if (timeoutIds[i].up) clearTimeout(timeoutIds[i].up) 
                     if (timeoutIds[i].down) clearTimeout(timeoutIds[i].down) 
                     timeoutIds[i].up = setTimeout(function() {
	     	         $hioki_nav_down.eq(i).stop().slideUp(300);
                     }, 250)
                     showInd = 100
                  }
		}
	})();





$(".model-1").click(function(){    	
		if($(".model-1").hasClass("hover")){
        	$(".model-1").removeClass("hover");
        	$(".header_dl_spbg").removeClass("unfold");
       	}else{
			$(".model-1").addClass("hover");
			$(".header_dl_spbg").addClass("unfold");
		}		
	});
	$("#close_sp").click(function() {
		$(".model-1").removeClass("hover");
        $(".header_dl_spbg").removeClass("unfold");

	})


	if (document.body.clientWidth < 1300) {
		$(".items_li_nav").click(function(){
			if ($(this).hasClass("active")){
				$(this).removeClass("active");
				$(".items_li_nav_info").slideUp();
			}else{
				$(this).addClass("active");
				$(".items_li_nav_info").slideDown();
			}
		});
	}
	


});



