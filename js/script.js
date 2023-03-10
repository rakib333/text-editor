document
  .getElementById("text-bold")
  .addEventListener("click", function (event) {
    // document.getElementById('main-text').style.fontWeight = 'bold'
    document.getElementById("main-text").classList.toggle("font-bold");
    buttonColor(event);
  });
document
  .getElementById("text-italic")
  .addEventListener("click", function (event) {
    document.getElementById("main-text").classList.toggle("italic");
    buttonColor(event);
  });
document
  .getElementById("text-underline")
  .addEventListener("click", function (event) {
    document.getElementById("main-text").classList.toggle("underline");
    buttonColor(event);
  });

function buttonColor(event) {
  event.target.classList.toggle("bg-purple-600");
  event.target.classList.toggle("text-white");
}

function buttonColor2(event) {
  for (const element of event.target.parentNode.children) {
    if (element.classList.contains("bg-purple-600")) {
      element.classList.remove("bg-purple-600");
      element.classList.remove("text-white");
    }
    event.target.classList.add("bg-purple-600");
    event.target.classList.add("text-white");
  }
}

document
  .getElementById("align-left")
  .addEventListener("click", function (event) {
    document.getElementById("main-text").style.textAlign = "left";
    buttonColor2(event);
  });
document
  .getElementById("align-center")
  .addEventListener("click", function (event) {
    document.getElementById("main-text").style.textAlign = "center";
    buttonColor2(event);
  });
document
  .getElementById("align-right")
  .addEventListener("click", function (event) {
    document.getElementById("main-text").style.textAlign = "right";
    buttonColor2(event);
  });

document
  .getElementById("font-size")
  .addEventListener("change", function (event) {
    document.getElementById("main-text").style.fontSize =
      event.target.value + "px";
  });
document
  .getElementById("font-color")
  .addEventListener("change", function (event) {
    document.getElementById("main-text").style.color = event.target.value;
  });

document
  .getElementById("text-style")
  .addEventListener("change", function (event) {
    document.getElementById("main-text").style.textTransform =
      event.target.value;
  });
