$(function(){
	// 向下滑动效果
	$('#header img:nth-child(2)').on('click', function(){
		$('body,html').on('mousewheel', function(){
			return false;
		});
		
		$('body,html').stop().animate({
			scrollTop:$('#header').height()
		}, 1000, function(){
			$('body,html').off('mousewheel');
		});
	});

	$('.mobileBar').on('click', function(){
		$(this).find('li').slideToggle(200);
	});

	// 返回顶部
	$('#toTop').on("click", function(){
		$('body,html').stop().animate({
			scrollTop:0
		},1000);
	});

	// "更多"悬浮效果
	$('.more').hover(function(){
		$(this).find('img').attr('src','images/arrows2.png');
	}, function(){
		$(this).find('img').attr('src','images/arrows.png');
	});
});