var $ = $,
    window;

$(function () {
   
    "use strict";
    
    
    // Nice Scroll
    
    $("html").niceScroll();
    
    
    $(".carousel").carousel({
        
        interval : 6000
        
    });
    
    // Show The Option Color Div When Click To The Gear
    
    $(".gear-check").click(function () {
        
        $(".color-option").fadeToggle(500);
        
    });
    
    // Change The Color Option When Click
    
    var colorLi = $(".color-option ul li"),
        scrollButton = $("#scroll-top");
    
    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#ff00eb").end()
        .eq(2).css("backgroundColor", "#17ff5e").end()
        .eq(3).css("backgroundColor", "#00a1ff").end()
        .eq(4).css("backgroundColor", "#ff6217");
    
    
    colorLi.click(function () {
       
        $("link[href*='theme']").attr("href", $(this).data("value"));
    });
    
    // Caching The Id Of Button With Color Box  
    

    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
                
            scrollButton.hide();
                
        }
    });
    
    
    // Click On The Button To Scroll Top
        
    scrollButton.click(function () {
             
        $("html, body").animate({
                
            scrollTop : 0
                
        }, 600);
            
    });
        
    
});

// Loading Screen

$(window).ready(function () {
   
    "use strict";
        
    $(".loading-overlay .spinner").fadeOut(100, function () {
        
        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(100, function () {
            
            $(this).remove();
            
        });
        
    });
    
});




