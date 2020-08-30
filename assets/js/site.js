$(document).ready(function(){

    var $nav = $('.navbar'),
        $body = $('body'),
        $window = $(window),
        navOffsetTop = $nav.offset().top,
        $document = $(document),
        $fixbar = $('.fixbar-front');


    function init(){
        //$window.on('scroll', onScroll);
        $window.on('resize', resize);
        //$window.on('scroll', parallax);
        resize();

    }


    function resize(){
        $fixbar.css('width', $('.fixbar').width());
    }
    
    

    init();
});

