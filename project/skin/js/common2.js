$(document).ready(function(){
        
    
    // 맨위로가기 버튼
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$(".gotop").fadeIn();
	} else {
		$(".gotop").fadeOut();
	}
});

$(".gotop").click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, "slow");
	return false;
});
    
    //상단메뉴
         $(".dp2,.dp2_bg").hide();
         $("#gnb li").mouseover(function(){
           $(".dp2,.dp2_bg").stop().slideDown();
           });
             
           $("#gnb li").mouseout(function(){
           $(".dp2,.dp2_bg").stop().slideUp() ;  
});
     
         //전체메뉴
         $(".all_box").hide();
         $(".all_menu").click(function(){
            $(".all_box").fadeIn(); 
         });
    
         $(".close").click(function(){
            $(".all_box").fadeOut(); 
         });
    
    
          //팝업광고
         $("#advertisement").hide();
         $(".popup_open").click(function(){
            $("#advertisement").slideDown(); 
         });
    
         $(".popup_x").click(function(){
            $("#advertisement").slideUp(); 
         });
    
});