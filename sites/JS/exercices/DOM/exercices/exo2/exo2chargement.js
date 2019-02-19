var chargebar = document.getElementById("chargebar");
var percentage = document.getElementById("percentage");
var size = 0;
var timer;

function interval()
{
	size += 2;
    chargebar.style.width=size+"%";
	percentage.textContent = size+"%";
    
    if(size >= 100) {
    
    	window.clearInterval(timer);
  
    }
}


timer = window.setInterval(interval,50)
