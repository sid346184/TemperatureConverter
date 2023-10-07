let celcius = document.querySelector('#celcius');
let fahrenheit = document.querySelector('#fahrenheit');
let kelvin = document.querySelector('#kelvin');
let button = document.querySelector('#button');
let minus = document.querySelector('#minus');

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

function backspace(){
    if(celcius.value===""){
        minusClickCount = 0;
        hasInput = false;
    }
}

function noNumber() {
  celcius.value = "";
  fahrenheit.value = "";
  kelvin.value = "";
}

let minusClickCount = 0;
let hasInput = false;

minus.addEventListener('click', () => {
    backspace();
  if (!hasInput) {
    minusClickCount++;
    if (minusClickCount % 2 === 0) {
      celcius.value = celcius.value.replace('-', '');
      kelvin.value = kelvin.value.replace('-', '');
      fahrenheit.value = fahrenheit.value.replace('-', '');
    } else {
      celcius.value="-"+celcius.value;
      kelvin.value="-"+kelvin.value;
      fahrenheit.value="-"+fahrenheit.value;
    }
  }
});

celcius.addEventListener('input', function () {
  hasInput = true;
  let cTemp = parseFloat(celcius.value);
  if (!isNaN(cTemp)) {
    let fTemp = (cTemp*(9/5)) +32;
    let kTemp = cTemp+273.15;
    fahrenheit.value=roundNumber(fTemp);
    kelvin.value=roundNumber(kTemp);
  } else {
    noNumber();
  }
});

fahrenheit.addEventListener('input', function () {
  hasInput = true;
  let fTemp = parseFloat(fahrenheit.value);
  if (!isNaN(fTemp)) {
    let cTemp = ((fTemp-32)*(5/9));
    let kTemp = ((fTemp-32)*(5/9)+273.15);
    celcius.value = roundNumber(cTemp);
    kelvin.value = roundNumber(kTemp);
  } else {
    noNumber();
  }
});

kelvin.addEventListener('input', function () {
  hasInput = true;
  let kTemp = parseFloat(kelvin.value);
  if (!isNaN(kTemp)) {
    let fTemp = ((kTemp-273.15)*(9/5)+32);
    let cTemp = kTemp-273.15;
    fahrenheit.value=roundNumber(fTemp);
    celcius.value=roundNumber(cTemp);
  } else {
    noNumber();
  }
});

button.addEventListener('click', () => {
  celcius.value = "";
  kelvin.value = "";
  fahrenheit.value = "";
  minusClickCount = 0;
  hasInput = false;
});
