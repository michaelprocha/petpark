const menu = document.querySelector("#menu");
const menuMobile = document.querySelector("#menu-mobile");
const menuClose = document.querySelector("#menu-close");

menu.addEventListener("click", () => {
	if (menuMobile.classList.contains("hidden")) {
		menuMobile.classList.remove("hidden");
		menuMobile.classList.add("flex");
	}
});

menuClose.addEventListener("click", () => {
	if (menuMobile.classList.contains("flex")) {
		menuMobile.classList.add("hidden");
		menuMobile.classList.remove("flex");
	}
});
