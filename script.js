// Get the necessary elements from the HTML document
var radiusInput = document.getElementById('radius');
var calculateButton = document.getElementById('calculate');
var volumeField = document.getElementById('volume');

// Function to calculate the volume of a sphere
function volume_sphere() {
    var radius = parseFloat(radiusInput.value); // Get the radius value from the input field

    // Check if the radius is a valid number
    if (!isNaN(radius)) {
        var volume = (4 / 3) * Math.PI * Math.pow(radius, 3); // Calculate the volume
        volumeField.textContent = "Volume: " + volume.toFixed(2);
    } else {
        volumeField.textContent = "Invalid radius"; // Display an error message for an invalid radius
    }
}


calculateButton.addEventListener('click', volume_sphere);

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
