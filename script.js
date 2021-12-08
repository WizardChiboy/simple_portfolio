function toggle() {
  var x = document.getElementById("nav-toggle");
  if (x.className === "nav-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-links";
  }
}
