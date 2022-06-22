let navToggler =0;
let countDownDate = new Date("Jul 25, 2022 19:00:00").getTime();
setInterval(() => {
    let moment = new Date().getTime();
    // getTime() returns time in milliseconds, so we have to convert it to seconds , minutes, hours, and days
    let difference = countDownDate-moment;
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    $('#daysCounter').html(days);
    $('#hoursCounter').html(hours);
    $('#minutesCounter').html(minutes);
    $('#secondsCounter').html(seconds);
}, 1000);

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