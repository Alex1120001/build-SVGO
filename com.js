function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
//btn show more
var time;
function red(){
	var remo = document.getElementById('remo');
	if(remo.innerHTML == 'Show more'){
		remo.innerHTML = 'Close';
		document.getElementById('demo').style.display = 'block';
		document.getElementById('demo').style.transition = '2s';
	}
	else{
		remo.innerHTML = 'Show more';
		document.getElementById('demo').style.display = 'none';
	}
}