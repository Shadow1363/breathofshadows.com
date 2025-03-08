// Add some animation to the page elements on load
document.addEventListener("DOMContentLoaded", () => {
	const fadeElements = document.querySelectorAll(
		".coming-soon h2, .message, .notify-form, .features",
	);

	fadeElements.forEach((element, index) => {
		setTimeout(() => {
			element.style.opacity = "0";
			element.style.transform = "translateY(20px)";
			element.style.transition = "opacity 0.8s ease, transform 0.8s ease";

			setTimeout(() => {
				element.style.opacity = "1";
				element.style.transform = "translateY(0)";
			}, 100);
		}, index * 200);
	});
});

// Add hover effects to the time sections
const timeSections = document.querySelectorAll(".time-section");
for (const section of timeSections) {
	section.addEventListener("mouseover", function () {
		this.style.backgroundColor = "rgba(93, 63, 211, 0.2)";
	});

	section.addEventListener("mouseout", function () {
		this.style.backgroundColor = "rgba(26, 26, 46, 0.8)";
	});
}
