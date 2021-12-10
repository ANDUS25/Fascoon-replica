$(document).ready(function(){
    $(".ans-para2, .ans-para3, .ans-para4, .ans-para5").hide()
    $("#btn-1,#btn-bt1").click(function(){
        $(".ans-para1").slideToggle("slow");
        $(".ans-para2,.ans-para3,.ans-para4,.ans-para5").hide()
    });
    $("#btn-2,#btn-bt2").click(function(){
        $(".ans-para2").slideToggle("slow");
        $(".ans-para1,.ans-para3,.ans-para4,.ans-para5").hide()
    });
    $("#btn-3,#btn-bt3").click(function(){
        $(".ans-para3").slideToggle("slow");
        $(".ans-para2,.ans-para1,.ans-para4,.ans-para5").hide()

    });
    $("#btn-4,#btn-bt4").click(function(){
        $(".ans-para4").slideToggle("slow");
        $(".ans-para2, .ans-para3, .ans-para1, .ans-para5").hide()

    });
    $("#btn-5,#btn-bt5").click(function(){
        $(".ans-para5").slideToggle("slow");
        $(".ans-para2,.ans-para3,.ans-para4,.ans-para1").hide()

    });
});


