export {};
let messe:string="Hello world";
let bodyEle=document.getElementsByTagName("body")[0]

let ele1=document.createElement("div")
let ele2=document.createElement("h1");
bodyEle.appendChild(ele1).appendChild(ele2).innerHTML=messe

