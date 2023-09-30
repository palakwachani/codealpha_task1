const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const colorCodeInput = document.getElementById("color-code");

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

generateBtn.addEventListener("click", () => {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorCodeInput.value = randomColor;
});

copyBtn.addEventListener("click", () => {
    colorCodeInput.select();
    document.execCommand("copy");
    alert("Color code copied to clipboard: " + colorCodeInput.value);
});
