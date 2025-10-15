document.addEventListener('DOMContentLoaded', function() {
    const subtitleElement = document.getElementById('animated-subtitle');
    if (subtitleElement) {
        const textToType = "Cybersecurity Professional & Software Developer";
        let i = 0;
        subtitleElement.textContent = ""; // Clear initial text

        function typeWriter() {
            if (i < textToType.length) {
                subtitleElement.textContent += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 100); // Typing speed
            } else {
                // Remove cursor after typing is complete
                subtitleElement.classList.remove('typing-cursor');
            }
        }
        
        // Add cursor class to start, and initiate the typing
        subtitleElement.classList.add('typing-cursor');
        typeWriter();
    }

    // Automatically update footer year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
