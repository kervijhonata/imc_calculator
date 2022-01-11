//monitor
var monitor = document.querySelector(".monitor")
monitor.style.position = "fixed";
monitor.style.top = "0px";
monitor.style.right = "0px";
monitor.style.backgroundColor = "red";
monitor.style.color = "white";
monitor.style.fontSize = "16pt";
monitor.style.padding = "30px";
window.addEventListener("resize", function(){
    monitor.innerHTML = window.innerWidth + "px";
});