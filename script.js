const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const header = document.querySelector(".site-header");
const onScroll = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 12);
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const revealItems = document.querySelectorAll(".skill-list li, .job");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
