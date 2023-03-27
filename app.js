// Attaching event listener to the "Generate" button
document.getElementById('generate-btn').addEventListener('click', generateImages);

function generateImages() {
    const url = document.getElementById('url-input').value;
    const generateQR = document.getElementById('qr-checkbox').checked;
    const generateBarcode = document.getElementById('barcode-checkbox').checked;
    const folderLabel = document.getElementById('folder-label');
    folderLabel.innerHTML = '';

    if (!generateQR && !generateBarcode) {
        alert("Veuillez choisir une option.");
        return;
    }

    if (generateQR) {
        const qrCodeCanvas = document.createElement('canvas');
        new QRCode(qrCodeCanvas, {
            text: url,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.L
        });
        folderLabel.appendChild(qrCodeCanvas);
    }

    if (generateBarcode) {
        const barcode = document.createElement('img');
        JsBarcode(barcode, url, {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 100,
            displayValue: false
        });
        folderLabel.appendChild(barcode);
    }

    folderLabel.insertAdjacentHTML('beforeend', '<p>Save the image with right click.</p>');
}
