let bmiCalculator = document.forms["bmi_calculator"];
let mainSection = document.getElementById("main_section");
let result = document.getElementById("result");

bmiCalculator.addEventListener("submit", calculateBMI);

function calculateBMI(e) {
    e.preventDefault();
    let weight = parseFloat(this.weight.value.replace(",", "."));
    let height = parseFloat(this.height.value.replace(",", "."));
    let bmi = weight / (Math.pow(height / 100, 2));
    result.textContent = `Twoje BMI: ${bmi.toFixed(2)}`;
    if (bmi >= 18.5 && bmi <= 24.9) {
        result.style.color = "green";
    }
    else {
        result.style.color = "red";
    }
}