const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".mobile-menu-container .close")
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset >60) {
        nav.classList.add("scrolled"); 
    } else {nav.classList.remove("scrolled");}
    
}
);

menu.addEventListener("click", () => {
   mobileMenuContainer.classList.add("active");
});

close.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
});

