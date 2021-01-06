// Adding and Removing Node

var para=document.createElement("p");
var node=document.createTextNode("This is new.");

para.appendChild(node);

var element=document.getElementById("div2");

var child=document.getElementById("p1");
element.insertBefore(para,child);