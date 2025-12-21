// Corrige le bug du retour arrière (bfcache)
window.addEventListener("pageshow", () => {
  document.body.classList.add("loaded");

  const transition = document.getElementById("page-transition");
  if (transition) {
    transition.classList.remove("active");
  }
});

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
  const href = link.getAttribute("href");

  // Ignore ancres internes et liens vides
  if (!href || href.startsWith("#") || link.target === "_blank") {
    return;
  }

  link.addEventListener("click", e => {
    e.preventDefault();

    const transition = document.getElementById("page-transition");
    if (transition) {
      transition.classList.add("active");
    }

    setTimeout(() => {
      window.location.href = href;
    }, 600);
  });
});


