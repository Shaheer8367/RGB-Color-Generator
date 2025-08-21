const redSlider=document.getElementById("redSlider");
const greenSlider=document.getElementById("greenSlider");
const blueSlider=document.getElementById("blueSlider");

const redValueSpan=document.getElementById("redValue");
const greenValueSpan=document.getElementById("greenValue"); 
const blueValueSpan=document.getElementById("blueValue"); 

const colorBox=document.getElementById("color-box");
const copyButton=document.getElementById("copyButton");
const inputTypeRGBValue=document.getElementById("inputType");

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor); 
blueSlider.addEventListener("input", updateColor); 
copyButton.addEventListener("click", copyRGBValue);


function updateColor() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    redValueSpan.textContent = redValue;
    greenValueSpan.textContent = greenValue;
    blueValueSpan.textContent = blueValue;

    colorBox.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    inputTypeRGBValue.value = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    inputTypeRGBValue.textContent = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

}

function copyRGBValue(){
    const rgbValue = inputTypeRGBValue.value;
    navigator.clipboard.writeText(rgbValue)
        .then(() => {
            alert("RGB value copied to clipboard: " + rgbValue);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });

}