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

<form
  action="https://formspree.io/f/xrezqjzw"
  method="POST"
  id="reservationForm"
>
  <input type="text" name="name" placeholder="Nom" required>
  <input type="email" name="email" placeholder="Email" required>
  <input type="date" name="date" required>
  <input type="time" name="time" required>
  <input type="number" name="guests" min="1" required>
  <textarea name="message" placeholder="Message (optionnel)"></textarea>

  <button type="submit">Réserver</button>
</form>



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



