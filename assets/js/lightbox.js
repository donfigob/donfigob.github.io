(function () {
  function closeLightbox() {
    var overlay = document.querySelector(".site-lightbox");
    if (!overlay) {
      return;
    }

    overlay.remove();
    document.body.classList.remove("site-lightbox-open");
  }

  function openLightbox(src, alt) {
    closeLightbox();

    var overlay = document.createElement("div");
    overlay.className = "site-lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", alt || "Expanded image");

    var button = document.createElement("button");
    button.className = "site-lightbox__close";
    button.type = "button";
    button.textContent = "Close";
    button.setAttribute("aria-label", "Close expanded image");

    var image = document.createElement("img");
    image.className = "site-lightbox__image";
    image.src = src;
    image.alt = alt || "";

    overlay.appendChild(button);
    overlay.appendChild(image);
    document.body.appendChild(overlay);
    document.body.classList.add("site-lightbox-open");

    button.focus();

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay || event.target === button) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a.image-lightbox");
    if (!link) {
      return;
    }

    event.preventDefault();

    var image = link.querySelector("img");
    openLightbox(link.getAttribute("href"), image ? image.getAttribute("alt") : "");
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
})();
