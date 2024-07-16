var message = "Hello world";
var bodyEle = document.getElementsByTagName("body")[0];
var ele1 = document.createElement("div");
var ele2 = document.createElement("h1");
bodyEle.appendChild(ele1).appendChild(ele2).innerHTML = message;
