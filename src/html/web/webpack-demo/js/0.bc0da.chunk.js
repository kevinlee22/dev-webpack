webpackJsonp([0],{23:function(e,n,o){"use strict";function t(){var e=document.getElementById("test");console.log("异步组件调用成功"),console.log(e);var n=document.createElement("div"),o=document.createElement("button"),t=document.createElement("br");o.innerHTML="Click me and look at the console!",n.innerHTML=["Hello","webpack"].join(""),n.appendChild(t),n.appendChild(o),document.body.appendChild(n),o.addEventListener("click",function(e){var n=e.target;console.log(e),console.log(n)})}e.exports=t}});