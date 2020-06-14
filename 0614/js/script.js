// function abc(){
//     document.getElementById("demo").innerHTML=Boolean(10>9);
// }

$(function(){
    // $('.text').css('color','#faa').css('fontSize','30vw');

    // var item=$('li');
    // $('button').on('click',function(){
    //     $('#len').text('저장된 <li>의 수는'+item.length'개입니다');
    // });


    // var aa=$('li');
    // $('button').click(function(){
    //     $('#len').append('저장된 li의 수는'+aa.length+'개 이다'+"<br>");
    // });

    // $('button').click(function(){
    //     // $('#list').append('<li>ㅊㄱ</li>');
    //     $('#list').prepend('<li>ㅊㄱ</li>');
    // });


    // $('button').on('click',function(){
    //     $('#fst').before('<tr><td>new</tr></td>')
    // });
        


    // $('button').on('click',function(){
    //     $('<td>new!</td>').insertBefore('#tar');
    // });


    // $('button').on('click',function(){
    //         $('.content').wrap('<div class="wrapper"></div>');
    //     });



    // $('#btn1').click(function(){
    //     $('#wrap').stop().fadeOut(3000);
    // });
    // $('#btn2').click(function(){
    //     $('#wrap').stop().fadeIn(2000);
    // });

    $('#btn1').click(function(){
        $('#wrap').slideUp();
    });
    $('#btn2').click(function(){
        $('#wrap').slideDown();
    });
});