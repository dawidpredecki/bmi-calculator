let bmiCalculator = document.forms["bmi_calculator"];
let mainSection = document.getElementById("main_section");

bmiCalculator.addEventListener("submit", calculateBMI);

function calculateBMI(e) {
    e.preventDefault();
    let weight = parseFloat(this.weight.value.replace(",", "."));
    let height = parseFloat(this.height.value.replace(",", "."));
    let bmi = weight / (Math.pow(height, 2));
    
    let result = document.createElement("h3");
    
    result.textContent = `Twoje BMI: ${bmi.toFixed(2)}`;
    mainSection.appendChild(result);
}


/* 
let bmiValue = weightFormValue / (Math.pow(heightFormValue, 2));
alert("Your BMI is " + bmiValue.toFixed(2));
*/