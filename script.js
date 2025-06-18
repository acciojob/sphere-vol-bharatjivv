function volume_sphere() {
    // Retrieve the radius input value
    let radiusInput = document.getElementById('radius').value;
    
    // Parse the input as a floating-point number
    let radius = parseFloat(radiusInput);
    
    // Validate the input
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return false;
    }
    
    // Calculate the volume
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    // Round the volume to four decimal places
    volume = volume.toFixed(4);
    
    // Display the result
    document.getElementById('volume').value = volume;
 //    document.getElementById('submit').value = "Calculated"
	// document.getElementById('radius').value = "hahaha"
    // Prevent form submission
    return false;
}

// Attach the function to the form's onsubmit event
// window.onload = function() {
//     document.getElementById('MyForm').onsubmit = volume_sphere;
// };
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
