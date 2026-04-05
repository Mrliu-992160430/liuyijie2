const revealNodes = document.querySelectorAll("[data-reveal]");

if (revealNodes.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));
}

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxCaption = document.querySelector(".lightbox__caption");
const lightboxClose = document.querySelector(".lightbox__close");
const lightboxButtons = document.querySelectorAll("[data-lightbox-image]");

function openLightbox(imageSrc, title, poem, author, altText) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;

  lightboxImage.src = imageSrc;
  lightboxImage.alt = altText || title;
  lightboxCaption.innerHTML = `
    <strong>${title}</strong>
    <div>${poem}</div>
    <small>${author}</small>
  `;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.style.overflow = "";
}

if (lightboxButtons.length && lightbox) {
  lightboxButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card =
        button.closest(".photo-card") ||
        button.closest(".journal-entry");
      const title = card?.querySelector("h3")?.textContent?.trim() || "风景";
      const poem = card?.querySelector(".photo-card__poem")?.textContent?.trim() || "";
      const author = card?.querySelector(".photo-card__author")?.textContent?.trim() || "";
      const altText = card?.querySelector("img")?.alt || title;
      openLightbox(button.dataset.lightboxImage, title, poem, author, altText);
    });
  });
}

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.classList.contains("is-open")) {
    closeLightbox();
  }
});
