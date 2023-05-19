function convertTemperature() {
    var inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    var unitFrom = document.getElementById('unitFrom').value;
    var unitTo = document.getElementById('unitTo').value;
    var result = document.getElementById('result');

    if (unitFrom === unitTo) {
        result.innerHTML = "Please select different units.";
        return;
    }

    var convertedTemperature;

    if (unitFrom === 'celsius') {
        if (unitTo === 'fahrenheit') {
            convertedTemperature = (inputTemperature * 9 / 5) + 32;
        } else if (unitTo === 'kelvin') {
            convertedTemperature = inputTemperature + 273.15;
        }
    } else if (unitFrom === 'fahrenheit') {
        if (unitTo === 'celsius') {
            convertedTemperature = (inputTemperature - 32) * 5 / 9;
        } else if (unitTo === 'kelvin') {
            convertedTemperature = (inputTemperature - 32) * 5 / 9 + 273.15;
        }
    } else if (unitFrom === 'kelvin') {
        if (unitTo === 'celsius') {
            convertedTemperature = inputTemperature - 273.15;
        } else if (unitTo === 'fahrenheit') {
            convertedTemperature = (inputTemperature - 273.15) * 9 / 5 + 32;
        }
    }

    result.innerHTML = inputTemperature + " " + unitFrom + " is equal to " + convertedTemperature.toFixed(2) + " " + unitTo + ".";
}