document.getElementById("myBtn").addEventListener("click",displayDate);

function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}


document.getElementById("newBtn").addEventListener("click",myFunction);

function myFunction(){
    alert("Hello World!");
}

var x=document.getElementById("newBtn1");
x.addEventListener("click", myFunction);
x.addEventListener("click",someOtherfunction);


function myFunction(){

    alert("Hello World!");
}

function someOtherfunction(){
    alert("This function was also executed!");
}

var x=document.getElementById("newBtn2");
x.addEventListener("mouseover",myFunction);

x.addEventListener("click",mySecondFunction);
x.addEventListener("mouseout",myThirdFunction);

function myFunction(){

    document.getElementById("demo").innerHTML+="Moused over!<br>";
}

function mySecondFunction(){
    document.getElementById("demo").innerHTML+="Clicked!<br>";
}

function myThirdFunction(){
    document.getElementById("demo").innerHTML+="Moused out!<br>";
}

window.addEventListener("resize",function(){
    document.getElementById("demo").innerHTML=Math.random();
});

var p1=5;
var p2=7;

document.getElementById("myBtn3").addEventListener("click",function(){
    myFunction(p1,p2);
});

function myFunction(a,b){

    var result=a*b;

    document.getElementById("demo").innerHTML=result;
}