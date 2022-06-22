let navToggler =0;
let chars =100;

let bars = document.getElementById('bars');
$("#charRemaining").html(chars);
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

$("#messageText").keyup(function(){
    let content = $("#messageText").val();
    if(content.length<=100){
        $("#charRemaining").html(`${100-content.length}`);
        $("#charText").html(" Characters remaining");
    }

    else{
        $("#charRemaining").html('You exceeded the limit !!');
        $("#charText").html("");
    }
});

$(window).scroll(function(){
    // console.log($('.home-section').height()/2);
    if($(window).scrollTop()>=$('.home-section').height()/2){
        $('#aaa').css('color', 'rgb(0 ,0, 0)'); 
        bars.classList.remove('text-white');
        bars.classList.add('text-black');
    }

    else{
        $('#aaa').css('color', 'rgb(255 , 255, 255)');
        bars.classList.remove('text-black');
        bars.classList.add('text-white');
    }
});
