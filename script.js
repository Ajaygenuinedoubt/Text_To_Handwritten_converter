function convertText() {
    const inputText = document.getElementById("inputText").value;
    const fontSize = document.getElementById("fontSize").value;
    const fontSelect = document.getElementById("fontSelect").value;
    const pageType = document.getElementById("pageType").value;
    const textColor = document.getElementById("textColor").value;
    
    const outputDiv = document.getElementById("handwrittenOutput");
    outputDiv.textContent = inputText;
    outputDiv.style.fontSize = fontSize + "px";
    outputDiv.style.color = textColor;
    outputDiv.style.fontFamily = fontSelect;

    if (pageType === "lined") {
        outputDiv.classList.add("lined");
    } else {
        outputDiv.classList.remove("lined");
        outputDiv.style.backgroundColor = "#fff";
    }

    // Check if input text is empty
    if (!inputText) {
        outputDiv.textContent = "Please enter some text!";
    }
}

function downloadPDF() {
    const inputText = document.getElementById("inputText").value;
    const fontSize = document.getElementById("fontSize").value;
    const fontSelect = document.getElementById("fontSelect").value;
    const textColor = document.getElementById("textColor").value;
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set font and text color for the PDF
    doc.setFont("Helvetica");  // Default jsPDF font for demonstration
    doc.setFontSize(fontSize);
    doc.setTextColor(textColor);

    // Add the input text to the PDF
    doc.text(inputText, 10, 20);

    // Save the PDF
    doc.save("handwritten_text.pdf");
}
