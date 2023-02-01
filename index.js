let btn = document.querySelector("#appointment-type");
btn.addEventListener("change", function (e) {
  e.preventDefault();
  if (this.value === "ad") {
    document.querySelector("#calendar").style.display = "block";
  } else {
    document.querySelector("#calendar").style.display = "none";
  }
});
