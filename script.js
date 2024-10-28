// Function to add fart-like effect to text in the container
function applyFartEffect() {
    const container = document.querySelector('.container');
    const textNodes = [...container.querySelectorAll("h1, p")];

    // Set interval to add/remove effect randomly
    setInterval(() => {
        textNodes.forEach(node => {
            const letters = [...node.textContent].map(letter => {
                const span = document.createElement("span");
                span.textContent = letter;
                return span;
            });

            node.innerHTML = ''; // Clear original text
            letters.forEach(letter => node.appendChild(letter));

            letters.forEach(letter => {
                if (Math.random() < 0.2) { // 20% chance to apply effect
                    letter.classList.add('fart');
                    setTimeout(() => letter.classList.remove('fart'), 300);
                }
            });
        });
    }, 200); // Run every 200ms for random effect
}

// Run the effect once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', applyFartEffect);
