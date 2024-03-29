let colorPickerContainer = document.getElementById("colorPickerContainer");
let selectedColorHexCode = document.getElementById("selectedColorHexCode");

function changeBgToGreyAndUpdateText() {
    colorPickerContainer.style.backgroundColor = "#e0e0e0";
    selectedColorHexCode.textContent = "#e0e0e0";
}

function changeBgToGreenAndUpdateText() {
    colorPickerContainer.style.backgroundColor = "#6fcf97";
    selectedColorHexCode.textContent = "#6fcf97";
}

function changeBgToBlueAndUpdateText() {
    colorPickerContainer.style.backgroundColor = "#56ccf2";
    selectedColorHexCode.textContent = "#56ccf2";
}

function changeBgToPurpleAndUpdateText() {
    colorPickerContainer.style.backgroundColor = "#bd6bd9";
    selectedColorHexCode.textContent = "#bd6bd9";
}