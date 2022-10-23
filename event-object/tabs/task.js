const tab = Array.from(document.querySelectorAll("#tabs1 .tab__navigation .tab"));
const content = document.querySelectorAll("#tabs1 .tab__contents .tab__content");

tab.forEach((item) => {
  item.addEventListener("click", function () {
    item.closest(".tab__navigation").querySelector(".tab_active").classList.remove("tab_active");
    item.classList.add("tab_active");
    item.closest(".tabs").querySelector(".tab__contents .tab__content_active").classList.remove("tab__content_active");
    content[tab.indexOf(item)].classList.add("tab__content_active");
  });
});
