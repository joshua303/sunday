var date = new Date();
var day=["일","월","화",'수','목','금','토'];

// document.write("오늘은"+day[date.getDay()]+"요일입니다.");

// var kor='한글';
// var eng='abcABC';
// document.write(kor.length+"<br>");
// document.write(eng.length);


// document.write(Math.min()+'<br>');
// document.write(Math.min(1,10,-100,-10,1000,0)+'<br>');
// document.write(Math.min(1,10,-100,-10,'-1000',0)+'<br>');
// document.write(Math.min(1,10,-100,-10,'문자열',0)+'<br>');


// document.getElementById('d1').innerHTML=Math.PI;
// document.getElementById('d2').innerHTML=Math.round(4,4);
// document.getElementById('d3').innerHTML=Math.max(1,10,100,1000,10000);
// document.getElementById('d4').innerHTML=Math.random();



// document.write(Math.floor(-11.01)+'<br>');
// document.write(Math.floor(-11.01)+'<br>');



var img=new Array();
img[0]='1.jpg';
img[1]='2.jpg';
img[2]='3.jpg';
img[3]='4.jpg';

function show(){
    var imgnum=Math.round(Math.random()*3);
    var obj=document.getElementById("intro");
    obj.src=img[imgnum];
}