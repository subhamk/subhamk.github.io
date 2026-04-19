// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact button
document.getElementById("contact-button").addEventListener("click", function () {
  const email = "Subham.Kailthya@warwick.ac.uk";
  const subject = encodeURIComponent("Contact from your academic website");
  const body = encodeURIComponent("Dear [Your Name],\n\n");
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});

// Dark mode toggle
const toggle = document.getElementById("dark-toggle");
const body = document.body;

if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  localStorage.setItem("dark-mode", body.classList.contains("dark") ? "enabled" : "disabled");
});

// Back to top
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mini-nav active link highlighting
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".mini-nav-inner a");

function onScroll() {
  let currentId = "";
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      currentId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
}

window.addEventListener("scroll", onScroll);
onScroll();

function openZoom(img) {
  const modalImg = document.getElementById("zoomedImage");
  modalImg.src = img.src;
  modalImg.alt = img.alt;
  document.getElementById("zoomModal").style.display = "flex";
}

function closeZoom() {
  document.getElementById("zoomModal").style.display = "none";
}
