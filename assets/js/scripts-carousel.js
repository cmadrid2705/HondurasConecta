
    $('#uno .owl-carousel').owlCarousel({
        loop:true,
    
        nav:true,
        items:4,
        autoplay: true,
        autoplayTimeout:9000,
        smartSpeed: 800,
        autoplayHoverPause:true,
        dots:false,
    
        responsive : {
            // breakpoint from 0 up
            0 : {
               items:1
            },
            // breakpoint from 480 up
            480 : {
                items:2
            },
            // breakpoint from 768 up
            768 : {
                items:2
            },
            992 : {
                items:3
            }
        }
    
    
        
    
    })
  
    $('#spons .owl-carousel').owlCarousel({
        loop:true,
    
        
        items:4,
        autoplay: true,
        autoplayTimeout:2000,
        smartSpeed: 800,
        autoplayHoverPause:true,
        dots:false,
    
        responsive : {
            // breakpoint from 0 up
            0 : {
               items:1
            },
            // breakpoint from 480 up
            480 : {
                items:2
            },
            // breakpoint from 768 up
            768 : {
                items:2
            },
            992 : {
                items:4
            }
        }
    
    
        
    
    })

