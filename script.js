let caixa = document.getElementById("caixa");
let zona1 = document.getElementById("zona1");
let zona2 = document.getElementById("zona2");
caixa.ondragstart = (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
  caixa.classList.add("black");
}
caixa.ondragend = (e) => {
  caixa.classList.remove("black");
}
for(const z of document.querySelectorAll(".zona")) {
  z.ondragover = (e) => {
    e.preventDefault();
  }
  z.ondrop = (e) => {
    e.preventDefault();
    let id = e.dataTransfer.getData("text/plain");
    let el = document.getElementById(id);
    if (z.id === "zona1") {
      zona1.appendChild(el);
    } else if (z.id === "zona2") {
      zona2.appendChild(el);
    } else if (z.id === "zona3") {
      zona3.appendChild(el);
    } else if (z.id === "zona4") {
      zona4.appendChild(el);
    }
  }
}