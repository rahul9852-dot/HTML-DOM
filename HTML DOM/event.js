function changeText(id){
    id.innerHTML='Ooops!';
}

function displayDate(){

    document.getElementById("demo").innerHTML=Date();
}

function checkCookies(){

    var text="";

    if(navigator.cookieEnabled==true){
        text="Cookies are enabled.";
    }
    else{
        text="Cookies are not enabled.";
    }

    document.getElementById("demo").innerHTML=text;

}

function myFunction(){

    var x=document.getElementById("fname");
    x.value=a.value.toUpperCase();
}


function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }


  function mDown(obj){

    obj.style.backgroundColor='#1ec5e5';
    obj.innerHTML="Release Me";
  }

  function mUp(obj){

    obj.style.backgroundColor='#94A38';
    obj.innerHTML="Thank You";
  }

  function mymessage(){
      alert("This message was triggered from the onload event");
  }

  function focuson(x){
      x.style.backgroundColor="yellow";

  }