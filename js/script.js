var generateBtn = document.getElementById('generate-btn');
var downloadBtn = document.getElementById('download-btn');
var createAnotherBtn = document.getElementById('create-another-btn');
var successMessage = document.getElementById('success-message');
var moreActions = document.getElementById('more-actions');
var outputContainer = document.getElementById('output-container');

// Set initial width and max-width of output-container to match input box
outputContainer.style.width = window.getComputedStyle(document.getElementById('input-text')).width;
outputContainer.style.maxWidth = window.getComputedStyle(document.getElementById('input-text')).width;

//QR Generator & API
generateBtn.addEventListener('click', function () {
    var text = document.getElementById('input-text').value;
    var qrcodeDiv = document.getElementById('qrcode');

    if (text !== '') {
        // Clear the previous content of qrcodeDiv
        qrcodeDiv.innerHTML = '';

        var apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}&download=1`;

        var qrcodeImage = document.createElement('img');
        qrcodeImage.src = apiUrl;
        qrcodeImage.alt = 'QR Code';

        // Append the image to qrcodeDiv
        qrcodeDiv.appendChild(qrcodeImage);

        // Enable download button
        downloadBtn.disabled = false;

        // Show buttons and success message
        downloadBtn.style.display = 'inline-block';
        createAnotherBtn.style.display = 'inline-block';
        successMessage.style.display = 'block';

        // Show "More Actions" text
        moreActions.style.display = 'block';

        // Set the width and max-width of the output container to match the input box
        outputContainer.style.width = window.getComputedStyle(document.getElementById('input-text')).width;
        outputContainer.style.maxWidth = window.getComputedStyle(document.getElementById('input-text')).width;

        // Hide the "Generate QR Code" button
        generateBtn.style.display = 'none';
    } else {
        alert('Please enter text or URL');
    }
});

downloadBtn.addEventListener('click', function () {
    var apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(document.getElementById('input-text').value)}&download=1`;
    window.location.href = apiUrl;
});

createAnotherBtn.addEventListener('click', function () {
    location.reload();
});

//Copyright 2018 to this year, changed every 1 Jan
document.getElementById('currentYear').innerText = new Date().getFullYear();