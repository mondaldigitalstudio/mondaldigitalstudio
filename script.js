// ===============================
// MONDAL DIGITAL STUDIO
// MAIN JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // CURRENT YEAR
    // ===============================

    const yearElements =
        document.querySelectorAll(".copyright");

    yearElements.forEach(function (element) {

        const currentYear =
            new Date().getFullYear();

        element.innerHTML =
            "© " +
            currentYear +
            " Mondal Digital Studio. All Rights Reserved.";

    });


    // ===============================
    // SMOOTH SCROLL
    // ===============================

    const links =
        document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ===============================
    // SERVICE CARD ANIMATION
    // ===============================

    const cards =
        document.querySelectorAll(
            ".service-card, .contact-card"
        );

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    cards.forEach(function (card) {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(30px)";

        card.style.transition =
            "opacity .6s ease, transform .6s ease";

        observer.observe(card);

    });

});