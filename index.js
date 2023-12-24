/*
1 meter = 3.281 feet => 3.28084
1 liter = 0.264 gallon => 0.264172
1 kilogram = 2.205 pound => 2.20462
*/

displayCalculatedConversion()

function displayCalculatedConversion(){
    const inputEl = document.getElementById("number-to-convert")
    document.getElementById("convert-btn").addEventListener("click", () => {
    const inputValue = Number(inputEl.value)
    
    if(inputValue <= 0){
        alert("Please enter a positive number greater than 0")
    }
    else{
        document.getElementById("length").textContent = metricImperialUnitConversion(inputValue, 3.28084, "meters", "feet")
        
        document.getElementById("volume").textContent = metricImperialUnitConversion(inputValue, 0.264172, "liters", "gallons")
        
        document.getElementById("mass").textContent = metricImperialUnitConversion(inputValue, 2.20462, "kilos", "pounds")
       }
       inputEl.value = ""
    })
}

function metricImperialUnitConversion(value, converterValue, metricUnit, imperialUnit){
    return `${value} ${metricUnit} = ${(value*converterValue).toFixed(3)} ${imperialUnit} | 
            ${value} ${imperialUnit} = ${(value/converterValue).toFixed(3)} ${metricUnit}`
}