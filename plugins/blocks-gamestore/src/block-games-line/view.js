document.addEventListener("DOMContentLoaded", function () {
	var swiperHero = new Swiper(".games-line-container", {
		loop: true,
		autoplay: {
			delay: 1,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		speed: 3500,
		grabCursor: true,
	});
});
