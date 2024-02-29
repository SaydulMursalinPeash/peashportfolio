document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-list a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Get the target element ID from the link href
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll to the target element
            targetElement.scrollIntoView({ behavior: 'smooth' });

            // Add animation by changing opacity and transform
            const animationDuration = 600; // milliseconds
            const startTime = performance.now();

            function animate() {
                const elapsedTime = performance.now() - startTime;
                const progress = elapsedTime / animationDuration;

                if (progress < 1) {
                    targetElement.style.opacity = progress;
                    targetElement.style.transform = `translateX(${(1 - progress) * 100}%)`;
                    requestAnimationFrame(animate);
                } else {
                    targetElement.style.opacity = 1;
                    targetElement.style.transform = 'translateX(0)';
                }
            }

            animate();
        });
    });
});