let navToggler =0;

$("#navCollapse").click(function(){
    let width = $("#sideNav").width();
    if(navToggler==0){
        $("#sideNav").animate({left: width}, 500);
        navToggler=1;
        console.log('hello1');
    }

    else{
        $("#sideNav").animate({left: '0px'}, 500);
        navToggler=0;  
        console.log('hello2');
    }
});

$("#closeButton").click(function(){
    $("#sideNav").animate({left: '0px'}, 500);
    navToggler=0;  
    console.log('hello2');
});

$("#singerButton1").click(function(){
    $("#singerOne").slideToggle(500);
    $("#singerTwo").slideUp(500);
    $("#singerThree").slideUp(500);
    $("#singerFour").slideUp(500);
    console.log("1");
});


$("#singerButton2").click(function(){
    $("#singerTwo").slideToggle(500);
    $("#singerOne").slideUp(500);
    $("#singerThree").slideUp(500);
    $("#singerFour").slideUp(500);
    console.log("1");
});

$("#singerButton3").click(function(){
    $("#singerThree").slideToggle(500);
    $("#singerTwo").slideUp(500);
    $("#singerOne").slideUp(500);
    $("#singerFour").slideUp(500);
    console.log("1");
});


$("#singerButton4").click(function(){
    $("#singerFour").slideToggle(500);
    $("#singerTwo").slideUp(500);
    $("#singerThree").slideUp(500);
    $("#singerOne").slideUp(500);
    console.log("1");
});