// Health tips data
const healthTipsData = [
    "Stay physically active by walking or doing gentle exercises.",
    "Eat a balanced diet rich in fruits, vegetables, and whole grains.",
    "Stay hydrated by drinking plenty of water throughout the day.",
    "Get enough sleep each night to feel rested and rejuvenated.",
    "Stay socially connected with friends and family to maintain mental well-being.",
    "Schedule regular check-ups with your healthcare provider.",
    "Take time to relax and practice stress-reduction techniques such as meditation or deep breathing exercises."
];

// Function to display health tips
function displayHealthTips() {
    const healthTipsList = document.getElementById('healthTips');
    healthTipsData.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        healthTipsList.appendChild(li);
    });
}

// Display health tips on page load
displayHealthTips();

// Form submission event listener
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you can handle form submission, e.g., send an email
    alert('Your message has been sent. Thank you!');
    // Reset form fields
    document.getElementById('contactForm').reset();
});
