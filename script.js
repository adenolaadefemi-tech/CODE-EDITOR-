// Select elements from our HTML document
const codeInput = document.getElementById('code-input');
const livePreview = document.getElementById('live-preview');

// Function to compile the input text directly into the iframe target
function updatePreview() {
    const code = codeInput.value;
    
    // Access the internal document layout of the iframe window
    const previewDocument = livePreview.contentDocument || livePreview.contentWindow.document;
    
    previewDocument.open();
    previewDocument.write(code);
    previewDocument.close();
}

// Watch for typing events to update live in real-time
codeInput.addEventListener('input', updatePreview);

// Run once at launch to display default placeholder code
window.addEventListener('DOMContentLoaded', updatePreview);
