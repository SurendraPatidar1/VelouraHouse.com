const pricingData = {
  cut: {
    label: "Cut & Finish",
    title: "Precision shaping services",
    description: "Designed for clients who want a refined silhouette and high-quality finish.",
    items: [
      ["Precision Haircut", "Cut, consultation, and finish styling", "Rs. 1,800"],
      ["Restyle Session", "Shape transformation and styling direction", "Rs. 2,600"],
      ["Blowdry Finish", "Smooth, volume, or movement finish", "Rs. 1,200"]
    ]
  },
  color: {
    label: "Color",
    title: "Dimensional color work",
    description: "Premium color services that prioritize tone, shine, and hair integrity.",
    items: [
      ["Gloss & Tone Refresh", "Shine correction and tonal balance", "Rs. 2,400"],
      ["Signature Balayage", "Hand-painted dimension and finish gloss", "Rs. 6,500"],
      ["Root Melt & Gloss", "Soft regrowth blend with shine treatment", "Rs. 4,100"]
    ]
  },
  care: {
    label: "Care Rituals",
    title: "Restorative salon treatments",
    description: "A luxury treatment menu that gives the site more depth than cuts and color alone.",
    items: [
      ["Scalp Renewal Ritual", "Detox, hydration, and massage sequence", "Rs. 2,200"],
      ["Bond Repair Therapy", "Strength and softness support", "Rs. 2,900"],
      ["Keratin Smoothing", "Customized frizz control pricing", "From Rs. 7,500"]
    ]
  }
};

function setPricing(key) {
  const data = pricingData[key];
  if (!data) return;

  document.getElementById("pricingEyebrow").textContent = data.label;
  document.getElementById("pricingTitle").textContent = data.title;
  document.getElementById("pricingDesc").textContent = data.description;

  const list = document.getElementById("pricingList");
  list.innerHTML = data.items
    .map(
      ([name, note, price]) =>
        `<article class="pricing-item"><div><h3>${name}</h3><p>${note}</p></div><strong>${price}</strong></article>`
    )
    .join("");
}

function initPricing() {
  const tabs = document.querySelectorAll(".pricing-tab");
  tabs.forEach((button) => {
    button.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      setPricing(button.dataset.target);
    });
  });

  setPricing("cut");
}

function initGalleryFilter() {
  const chips = document.querySelectorAll(".filter-chip");
  const cards = document.querySelectorAll("#galleryGrid .gallery-card");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");

      const filter = chip.dataset.filter;
      cards.forEach((card) => {
        const show = filter === "all" || card.dataset.kind === filter;
        card.style.display = show ? "block" : "none";
      });
    });
  });
}

function initForm() {
  const form = document.getElementById("bookingForm");
  const success = document.getElementById("formSuccess");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    success.style.display = "block";
    form.reset();
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("siteNav");

  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
}

initPricing();
initGalleryFilter();
initForm();
initMobileMenu();
