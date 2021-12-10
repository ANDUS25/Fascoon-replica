$(document).ready(function(){
    window.addEventListener("scroll", function(){
        var header = document.querySelector(".bt-nav");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
    // --------------------------------page-2 start from here--------------------------------------------------
    // showing only first para and hiding other's
    $(".para-1").show()
    $(".para-2").hide()
    $(".para-3").hide()
    $(".para-4").hide()
    $(".lady").hide()

    $(".boy-1, .boy-2, .boy-3, .boy-4, .girl").mouseenter(function(){
        $(this).css("cursor","pointer")
    })

    $(".boy-1").click(function(){
        $(".boy-1").css({
            "width":"20%",
            "height":"inherit"
        })
        $(".boy-2").css({
            "width":"15%",
            "height":"inherit"
        })
        $(".boy-3, .boy-4, .girl").css({
            "width":"10%",
            "height":"inherit"
        })
        $('.para-1').show()
        $(".para-2").hide()
        $(".para-3").hide()
        $(".para-4").hide()
        $(".lady").hide()
    })

    $(".boy-2").click(function(){
        $(".boy-2").css({
            "width":"20%",
            "height":"inherit"
        })
        $(".boy-1").css({
            "width":"15%",
            "height":"inherit"
        })
        $(".boy-3, .boy-4, .girl").css({
            "width":"10%",
            "height":"inherit"
        })
        
        $(".para-1").hide()
        $('.para-2').show()
        $(".para-3").hide()
        $(".para-4").hide()
        $(".lady").hide()
    })

   
    $(".boy-3").click(function(){
        $('.para-3').show(0200,function(){
            $(".para-3").css({
                "top":"8em",
                "right":"0px",
            })
        }),
        $(".boy-3").css({
            "width":"15%",
            "height":"inherit"
        })

        $(".boy-1, .boy-2").css({
            "width":"15%",
            "height":"inherit"
        })
        $(".boy-4, .girl").css({
            "width":"10%",
            "height":"inherit"
        })

        $(".para-1").hide()
        $(".para-2").hide()
        $(".para-4").hide()
        $(".lady").hide()
    })

    $(".boy-4").click(function(){
        $(".boy-4").css({
            "width":"20%",
            "height":"inherit"
        })
        $(".boy-1, .boy-2").css({
            "width":"15%",
            "height":"inherit"
        })
        $(".boy-3, .girl").css({
            "width":"10%",
            "height":"inherit"
        })
        
        $(".para-1").hide()
        $(".para-2").hide()
        $(".para-3").hide()
        $('.para-4').show()
        $(".lady").hide()
    })

    $(".girl").click(function(){
        $(".girl").css({
            "width":"20%",
            "height":"inherit"
        })
        $(".boy-1 , .boy-2").css({
            "width":"15%",
            "height":"inherit"
        })
        $(".boy-3").css({
            "width":"12%",
            "height":"inherit"
        })
        $(" .boy-4").css({
            "width":"10%",
            "height":"inherit"
        })
        $(".para-1, .para-2, .para-3, .para-4, .lady").hide()
        $('.para-2').hide()
        $(".para-3").hide()
        $(".para-4").hide()
        $(".lady").show()
    })
// ------------------------------------page-2 end here------------------------------------------------------


// Hidding both para's
    $(".main_block_para-1").css({
        "background-color": "rgb(108, 151, 151)",
            "padding":"1.25rem",
            "font-size": "17px"
    })
    $('.main_block_para-2').hide()
    $('.main_block_para-3').hide()

    // making cursor pointed
    $(".plus-1").css({"cursor":"pointer"})
    $(".plus-2").css({"cursor":"pointer"})
    $(".plus-3").css({"cursor":"pointer"})
    $(".minus-1").css({"cursor":"pointer"})
    $(".minus-2").css({"cursor":"pointer"})
    $(".minus-3").css({"cursor":"pointer"})
})

    // para-1 functions start here
    $('.plus-1').click(function(){
        $(".main_block_para-1").slideDown()
        $(".main_block_para-1").css({
            "background-color": "rgb(108, 151, 151)",
                "padding":"1.25rem",
                "font-size": "17px"
        })
        $('.main_block_para-2').hide(500)
        $('.main_block_para-3').hide(500)
    });
    $(".minus-1").click(function(){
        $(".main_block_para-1").hide(0500)
    });
    // para-1 functions end here

    // para-2 functions start here
    $('.plus-2').click(function(){
        $(".main_block_para-2").slideDown()
        $(".main_block_para-2").css({
            "background-color": "rgb(108, 151, 151)",
                "padding":"1.25rem",
                "font-size": "17px",
                "padding":"2em 2em"
        })
        $('.main_block_para-1').hide(0500)
        $('.main_block_para-3').hide(0500)
        
    })
    $(".minus-2").click(function(){
        $(".main_block_para-2").hide(0500)
    });
    //  para-2 functions end here


    // para-3 functions start here
    $('.plus-3').click(function(){
        $(".main_block_para-3").slideDown()
        $(".main_block_para-3").css({
            "background-color": "rgb(108, 151, 151)",
                "padding":"1.25rem",
                "font-size": "17px",
                "padding":"2em 2em"
        })
        $('.main_block_para-1').hide(0500)
        $('.main_block_para-2').hide(0500)
        $(".main_block_para-3").addClasss('.para')
    })

    $(".minus-3").click(function(){
        $(".main_block_para-3").hide(0500)
    });
    //  para-3 functions end here

    $('.own-nav-link').mouseenter(function(){
        $('.dm').slideDown( ).show()
    })