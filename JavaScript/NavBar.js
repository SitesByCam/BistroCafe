const menuToggle = document.getElementById("MenuToggle");
const mobileMenu = document.getElementById("MobileMenu");

menuToggle.addEventListener("click", () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex";
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        mobileMenu.style.display = "none";
    }
});