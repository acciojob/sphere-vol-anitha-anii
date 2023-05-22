
var radiusInput = document.getElementById('radius');
var calculateButton = document.getElementById('calculate');
var volumeField = document.getElementById('volume');


function volume_sphere() {
    var radius = parseFloat(radiusInput.value); 
    var volume = (4/3) * Math.PI * Math.pow(radius, 3); 
  
    volumeField.textContent = "Volume: " + volume.toFixed(2);
}


calculateButton.addEventListener('click', volume_sphere);

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
