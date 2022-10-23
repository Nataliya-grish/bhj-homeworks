const dropdownValue = document.querySelectorAll(".dropdown__value");

[...dropdownValue].forEach((btn) => {
	const list = btn.closest(".dropdown").querySelector(".dropdown__list");
	const items = btn.closest(".dropdown").querySelectorAll(".dropdown__item");
	
	btn.addEventListener("click", () => {
		list.classList.toggle("dropdown__list_active");
	});
	
	[...items].forEach((item) => {
		item.addEventListener("click", (event) => {
			btn.textContent = item.textContent.trim();
			list.classList.remove("dropdown__list_active");
			event.preventDefault();
		});
	});
});