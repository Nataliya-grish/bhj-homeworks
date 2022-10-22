const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");

const modalClose = document.getElementsByClassName("modal__close");
[...modalClose].forEach((item) => item.onclick = () => {
	const modalActive = document.getElementsByClassName("modal_active");
	[...modalActive].forEach((item) => item.classList.remove( "modal_active"));
});
const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.querySelector(".show-success");
showSuccess.onclick = () => {
	modalMain.classList.remove("modal_active");
	modalSuccess.classList.add("modal_active");
};