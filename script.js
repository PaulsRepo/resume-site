function filterExp(type) {
  const entries = document.querySelectorAll(".entry");
  entries.forEach(entry => {
    if (type === "all") {
      entry.style.display = "flex";
    } else {
      entry.style.display = entry.classList.contains(type) ? "flex" : "none";
    }
  });
}

// Optional: handle form honeypot logic on submission
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  const companyField = this.querySelector("input[name='company']");
  if (companyField.value) {
    e.preventDefault(); // Detected spam
    alert("Spam detected. Submission blocked.");
  }
});
