//Menu mobile
const menu = document.querySelector("#menu");
const menuMobile = document.querySelector("#menu-mobile");
const menuClose = document.querySelector("#menu-close");
//Scroll drag
const carouselContainer = document.querySelector("#carousel-container");
const carouselItens = [...document.querySelectorAll(".carousel-itens")];
const carouselArrows = [...document.querySelectorAll(".carousel-arrows")];

let isDragging = false;
let startX = 0;
let scrollStart = 0;
const sensitivity = 1.5;

function openMenu() {
	if (menuMobile.classList.contains("hidden")) {
		menuMobile.classList.remove("hidden");
		menuMobile.classList.add("flex");
	}
}

function closeMenu() {
	if (menuMobile.classList.contains("flex")) {
		menuMobile.classList.add("hidden");
		menuMobile.classList.remove("flex");
	}
}

function arrow(i) {
	if (i === 0) {
		if (carouselContainer.scrollLeft - 300 >= 0) {
			carouselContainer.scrollLeft -= 316;
		} else {
			carouselContainer.scrollLeft = 0;
		}
	} else {
		if (carouselContainer.scrollLeft + 300 <= 1730) {
			carouselContainer.scrollLeft += 316;
		} else {
			carouselContainer.scrollLeft = 1730;
		}
	}
}

function redirect(i) {
	if (i === 0) {
		carouselContainer.scrollLeft = 0;
	} else if (i === 1) {
		carouselContainer.scrollLeft = 300;
	} else if (i === 2) {
		carouselContainer.scrollLeft = 600;
	} else if (i === 3) {
		carouselContainer.scrollLeft = 900;
	} else if (i === 4) {
		carouselContainer.scrollLeft = 1200;
	} else if (i === 5) {
		carouselContainer.scrollLeft = 1500;
	} else if (i === 6) {
		carouselContainer.scrollLeft = 1800;
	}
}

function startDrag(x) {
	isDragging = true;
	startX = x - carouselContainer.offsetLeft;
	scrollStart = carouselContainer.scrollLeft;
}

function endDrag() {
	isDragging = false;
	carouselContainer.classList.remove("active");
}

function dragMove(x) {
	if (!isDragging) return;
	const moveX = x - carouselContainer.offsetLeft;
	const distance = (moveX - startX) * sensitivity;
	carouselContainer.scrollLeft = scrollStart - distance;
}

//Menu mobile
menu.addEventListener("click",openMenu);
menuClose.addEventListener("click",closeMenu);
//Carousel arrows
carouselArrows.forEach((element, i) => {
	element.addEventListener("click", () => arrow(i));
});
//Carousel
carouselContainer.addEventListener("mousedown", (event) => startDrag(event.pageX));
carouselContainer.addEventListener("mouseup", endDrag);
carouselContainer.addEventListener("mouseleave", endDrag);
carouselContainer.addEventListener("mousemove", (event) => {
	event.preventDefault();
	dragMove(event.pageX);
});
//Carousel mobile
carouselContainer.addEventListener("touchstart", (event) => startDrag(event.touches[0].pageX));
carouselContainer.addEventListener("touchend", endDrag);
carouselContainer.addEventListener("touchcancel", endDrag);
carouselContainer.addEventListener("touchmove", (event) => {
	dragMove(event.touches[0].pageX);
});