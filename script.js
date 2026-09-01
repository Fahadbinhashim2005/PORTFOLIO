document.addEventListener("DOMContentLoaded", function() {
    const dynamicTextElement = document.getElementById("dynamic-text");
    
    const roles = [
        "Web Developer", 
        "AI Enthusiast", 
        "Director",
        "UI/UX Designer"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    let erasingDelay = 50;
    let newRoleDelay = 2000; 

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            dynamicTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            dynamicTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? erasingDelay : typingDelay;
        
        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = newRoleDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; 
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // Start the typing effect
    if (dynamicTextElement) {
        setTimeout(typeEffect, 1000);
    }
});