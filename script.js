document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links

    document.querySelectorAll('nav ul li a').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({

                behavior: 'smooth'

            });

        });

    });

    // Intersection Observer for fade-in effect on sections

    const sections = document.querySelectorAll('section');

    const observerOptions = {

        root: null,

        rootMargin: '0px',

        threshold: 0.2 // Trigger when 20% of the section is visible

    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                // Optional: Stop observing once it's visible if you only want the animation once

                // observer.unobserve(entry.target);

            } else {

                // Optional: Remove 'visible' class when out of view to reset animation

                // entry.target.classList.remove('visible');

            }

        });

    }, observerOptions);

    sections.forEach(section => {

        sectionObserver.observe(section);

    });

    // Simple CTA button animation (e.g., bounce on click)

    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {

        ctaButton.addEventListener('click', () => {

            ctaButton.classList.add('bouncing');

            setTimeout(() => {

                ctaButton.classList.remove('bouncing');

                // You could also scroll to a section here, e.g.,

                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });

            }, 800); // Duration of the bounce

        });

    }

    // Add a bouncing animation style to CSS

    const styleSheet = document.createElement("style");

    styleSheet.type = "text/css";

    styleSheet.innerText = `

        @keyframes bounce {

            0%, 20%, 50%, 80%, 100% {

                transform: translateY(0) scale(1.05);

            }

            40% {

                transform: translateY(-15px) scale(1.05);

            }

            60% {

                transform: translateY(-7px) scale(1.05);

            }

        }

        .cta-button.bouncing {

            animation: bounce 0.8s ease-in-out;

        }

    `;

    document.head.appendChild(styleSheet);

});

