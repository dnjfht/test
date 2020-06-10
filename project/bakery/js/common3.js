$(document).ready(function(){

        // 퀵메뉴
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$(".quickBox").fadeIn();
	} else {
		$(".quickBox").fadeOut();
	}
});
    
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
    
         //quick_menu_desc
    
         $(".quick_menu_desc1").hide();
         $(".quick_img1").click(function(){
         $(".quick_menu_desc1").show();
             $(".quickBox").css("width","978px");
         });
    
         $(".quick_menu_desc1 .close").click(function(){
         $(".quick_menu_desc1").hide(); 
             $(".quickBox").css("width","100px");
         }); 
    
         $(".quick_menu_desc2").hide();
         $(".quick_img2").click(function(){
         $(".quick_menu_desc2").show();
             $(".quickBox").css("width","978px");
         });
    
         $(".quick_menu_desc2 .close").click(function(){
         $(".quick_menu_desc2").hide(); 
             $(".quickBox").css("width","100px");
         });
    
         $(".quick_menu_desc3").hide();
         $(".quick_img3").click(function(){
         $(".quick_menu_desc3").show(); 
         $(".quickBox").css("width","978px");
         });
    
         $(".quick_menu_desc3 .close").click(function(){
         $(".quick_menu_desc3").hide();
         $(".quickBox").css("width","100px");
         });
    
         $(".quick_menu_desc4").hide();
         $(".quick_img4").click(function(){
         $(".quick_menu_desc4").show();
         $(".quickBox").css("width","978px");
         });
    
         $(".quick_menu_desc4 .close").click(function(){
         $(".quick_menu_desc4").hide(); 
         $(".quickBox").css("width","100px");
         });
    
         $(".quick_menu_desc5").hide();
         $(".quick_img5").click(function(){
         $(".quick_menu_desc5").show();
         $(".quickBox").css("width","978px");
         });
    
         $(".quick_menu_desc5 .close").click(function(){
         $(".quick_menu_desc5").hide(); 
         $(".quickBox").css("width","100px");
         });
  
         //menu_detail_desc
         $(".goods_detail1").hide();
         $(".goods_img1").click(function(){
         $(".goods_detail1").fadeIn(); 
         });
    
         $(".goods_detail1 .close").click(function(){
         $(".goods_detail1").fadeOut(); 
         });

         $(".goods_detail2").hide();
         $(".goods_img2").click(function(){
         $(".goods_detail2").fadeIn(); 
         });
    
         $(".goods_detail2 .close").click(function(){
         $(".goods_detail2").fadeOut(); 
         });
        
         $(".goods_detail3").hide();
         $(".goods_img3").click(function(){
         $(".goods_detail3").fadeIn(); 
         });
    
         $(".goods_detail3 .close").click(function(){
         $(".goods_detail3").fadeOut(); 
         });
    
         $(".goods_detail4").hide();
         $(".goods_img4").click(function(){
         $(".goods_detail4").fadeIn(); 
         });
    
         $(".goods_detail4 .close").click(function(){
         $(".goods_detail4").fadeOut(); 
         });
    
         $(".goods_detail5").hide();
         $(".goods_img5").click(function(){
         $(".goods_detail5").fadeIn(); 
         });
    
         $(".goods_detail5 .close").click(function(){
         $(".goods_detail5").fadeOut(); 
         });
    
         $(".goods_detail6").hide();
         $(".goods_img6").click(function(){
         $(".goods_detail6").fadeIn(); 
         });
    
         $(".goods_detail6 .close").click(function(){
         $(".goods_detail6").fadeOut(); 
         });
    
         $(".goods_detail7").hide();
         $(".goods_img7").click(function(){
         $(".goods_detail7").fadeIn(); 
         });
    
         $(".goods_detail7 .close").click(function(){
         $(".goods_detail7").fadeOut(); 
         });
    
         $(".goods_detail8").hide();
         $(".goods_img8").click(function(){
         $(".goods_detail8").fadeIn(); 
         });
    
         $(".goods_detail8 .close").click(function(){
         $(".goods_detail8").fadeOut(); 
         });
    
         //menu_detail_desc
         $(".menu_detail1").hide();
         $(".menu_img1").click(function(){
         $(".menu_detail1").fadeIn(); 
         });
    
         $(".menu_detail1 .close").click(function(){
         $(".menu_detail1").fadeOut(); 
         });
    
         $(".menu_detail2").hide();
         $(".menu_img2").click(function(){
         $(".menu_detail2").fadeIn(); 
         });
    
         $(".menu_detail2 .close").click(function(){
         $(".menu_detail2").fadeOut(); 
         });
    
         $(".menu_detail3").hide();
         $(".menu_img3").click(function(){
         $(".menu_detail3").fadeIn(); 
         });
    
         $(".menu_detail3 .close").click(function(){
         $(".menu_detail3").fadeOut(); 
         });

         $(".menu_detail4").hide();
         $(".menu_img4").click(function(){
         $(".menu_detail4").fadeIn(); 
         });
    
         $(".menu_detail4 .close").click(function(){
         $(".menu_detail4").fadeOut(); 
         });
    
         $(".menu_detail5").hide();
         $(".menu_img5").click(function(){
         $(".menu_detail5").fadeIn(); 
         });
    
         $(".menu_detail5 .close").click(function(){
         $(".menu_detail5").fadeOut(); 
         });
    
         $(".menu_detail6").hide();
         $(".menu_img6").click(function(){
         $(".menu_detail6").fadeIn(); 
         });
    
         $(".menu_detail6 .close").click(function(){
         $(".menu_detail6").fadeOut(); 
         });
    
         $(".menu_detail7").hide();
         $(".menu_img7").click(function(){
         $(".menu_detail7").fadeIn(); 
         });
    
         $(".menu_detail7 .close").click(function(){
         $(".menu_detail7").fadeOut(); 
         });
    
         //전체메뉴
         $(".all_box").hide();
         $(".all_menu").click(function(){
            $(".all_box").fadeIn(); 
         });
    
         $(".close").click(function(){
            $(".all_box").fadeOut(); 
         });
    
         $(".dp2,.dp2-bg").hide();
        
        $("#gnb>li").mouseover(function(){
           $(".dp2,.dp2-bg").stop().slideDown(); 
        });
        
        $("#gnb>li").mouseout(function(){
           $(".dp2,.dp2-bg").stop().slideUp(); 
        });
        
         var slider = $('.bxslider').bxSlider({
			auto: true,
		});

        var slider = $('.bxslider2').bxSlider({
			auto: true,
            pager: false,
		});
    
        var slider = $('.bxslider3').bxSlider({
			auto: true,
            pager: false,
		});
      
        var slider = $('.bxslider4').bxSlider({
			auto: true,
            pager: false,
		});
    
        var slider = $('.bxslider5').bxSlider({
			auto: true,
            pager: false,
		});
    
        var slider = $('.slick1').slick({
            infinite: true,
            pager: false,
            slideToshow: 3,
            slidesToScroll: 3
            
		});
    
        // 클릭시 멈춤 현상 해결 //
		$(document).on('click','.bx-next, .bx-prev',function() {
		slider.stopAuto();
		slider.startAuto();
		slider_01.stopAuto();
		slider_01.startAuto();
		});
		$(document).on('mouseover','.bx-pager, #bx-pager1',function() {
		slider.stopAuto();
		slider.startAuto();
		slider_01.stopAuto();
		slider_01.startAuto();
		slider_02.stopAuto();
		slider_02.startAuto();
		});	
            
    
});