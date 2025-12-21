document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("formMessage").textContent =
        "Merci pour votre message ! Nous vous répondrons rapidement.";

    this.reset();
});
const reservationForm = document.querySelector("#reservation form");

reservationForm.addEventListener("submit", function () {
    alert("Merci ! Votre réservation a bien été envoyée.");
});

