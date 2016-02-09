var bol = false;//用于阻止连续滚动下滑
var ele = "body";
var brower = window.navigator.userAgent;
if(brower.indexOf("MSIE")>0 || brower.indexOf("Firefox")>0){
	ele = "html";
}

$(ele).mousewheel(function(down){
	if(down){
		scrollFn($(this), ($(this).scrollTop()+710));

	}else if($(window).height() == $(document).height() - $(window).scrollTop()){
		scrollFn($(this), ($(this).scrollTop()-467-101));
	}else{
		scrollFn($(this), ($(this).scrollTop()-710));
	}
});


function scrollFn(obj, scrollT){
	if(bol){return false};

	obj.stop().animate({
		scrollTop:scrollT
	},1000, function(){bol = false});

	bol = true;
}