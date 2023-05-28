
function volume_sphere() {
	var volume;
  var radius = document.getElementById('radius').value;
   radius = Math.abs(radius);
	 volume = (4 / 3) * Math.PI * Math.pow(radius, 3); 
     volume = valume.tofixed(4);
	document.getElementById('volume').value=valume;
    return false;
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
