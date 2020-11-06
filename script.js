var iframe = document.getElementById("iframe");
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
const openBotButton = document.querySelector("#bot-open-img img");
var upperPart = document.getElementById("inner-part");
// const upperInfo = innerDoc.querySelector("#upper-info-container");

console.log(innerDoc);
console.log(upperPart);
// console.log(iframe);
// console.log(openBotButton);

openBotButton.addEventListener("click", (e) => {
  e.preventDefault();
  iframe.classList.add("active");
});
