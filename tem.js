  document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;


 function tempConvert() {


    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;
    var kelvin = document.getElementById("kelvin").value;
  
   
  if (fahrenheit != '') {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
        kelvin = ((parseFloat(fahrenheit) -32)/1.8)+273;
            
    } 


    else if (celsius != '') {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
        kelvin=(parseFloat(celsius) + 273.15);
       
    }

    else {
        fahrenheit = ((parseFloat(kelvin) -273.15) *1.8 )+32;
        celsius = (parseFloat(kelvin) -273.15);

    }
  



    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
    document.getElementById('kelvin').value = parseFloat(kelvin).toFixed(1);
 
} 


function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
     document.getElementById('kelvin').value = '';
} 




function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {

      alertify.error('Please enter only number!');
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
