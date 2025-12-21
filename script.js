// Contact form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("formMessage").textContent =
            "Merci pour votre message ! Nous vous répondrons rapidement.";
        this.reset();
    });
}

// Reservation form
const reservationForm = document.getElementById("reservationForm");
if (reservationForm) {
    reservationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Merci ! Votre réservation a bien été envoyée.");
        reservationForm.reset();
    });
}


// Page transition
document.querySelectorAll("a").forEach(link => {
    if (link.href && link.target !== "_blank") {
        link.addEventListener("click", e => {
            e.preventDefault();
            const transition = document.getElementById("page-transition");
            transition.classList.add("active");

            setTimeout(() => {
                window.location.href = link.href;
            }, 600);
        });
    }
});

