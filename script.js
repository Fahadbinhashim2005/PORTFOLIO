document.addEventListener("DOMContentLoaded", function() {
    const dynamicTextElement = document.getElementById("dynamic-text");
    
    const roles = [
        "Full-Stack Developer", 
        "VFX Artist", 
        "IoT Enthusiast",
        "Filmmaker"
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
    
    if (dynamicTextElement) {
        setTimeout(typeEffect, 1000);
    }
});

// =========================================
// SPECULAR BUTTON MOUSE TRACKING
// =========================================
document.addEventListener("DOMContentLoaded", function() {
    const specularBtn = document.getElementById("contact-btn");
    
    if (specularBtn) {
        // Track mouse movement inside the button
        specularBtn.addEventListener("mousemove", (e) => {
            const rect = specularBtn.getBoundingClientRect();
            // Calculate mouse position relative to the button
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Send coordinates to CSS variables
            specularBtn.style.setProperty("--x", `${x}px`);
            specularBtn.style.setProperty("--y", `${y}px`);
        });

        // Fade the light in when mouse enters
        specularBtn.addEventListener("mouseenter", () => {
            specularBtn.style.setProperty("--active", `1`);
        });

        // Fade the light out when mouse leaves
        specularBtn.addEventListener("mouseleave", () => {
            specularBtn.style.setProperty("--active", `0`);
        });
    }
});