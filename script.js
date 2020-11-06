var iframe = document.getElementById("iframe");
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
const openBotButton = document.querySelector("#bot-open-img img");

openBotButton.addEventListener("click", (e) => {
  e.preventDefault();
  iframe.classList.add("active");
});
