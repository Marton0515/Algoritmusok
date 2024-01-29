
const gyumolcsok = document.querySelectorAll(".gyumolcs");
let gyumolcsInput = document.querySelector(".gyumiInp");
let selectedGyumiIndex = document.querySelector(".selectedGyumiIndex");

function changeBackGyuminStyles (gyumin) {
  // Lista elem
  gyumin.style.backgroundColor = "#fff";
  gyumin.style.color = "#000";
  gyumin.style.padding = "0%";
  gyumin.style.width = "auto";
  gyumin.style.border = "0px solid red";
  gyumin.style.borderRadius = "0px";
  gyumin.style.fontWeight = "normal";

  // Lista Elem Indexe
  selectedGyumiIndex.style.backgroundColor = "#fff";
  selectedGyumiIndex.style.color = "#000";
  selectedGyumiIndex.style.padding = "0%";
  selectedGyumiIndex.style.border = "0px solid red";
  selectedGyumiIndex.style.borderRadius = "0px";
  selectedGyumiIndex.style.fontWeight = "normal";

  // Kiválasztott Elem Indexe
  selectedGyumiIndex.innerHTML = "";
}


function modifySelectedGyuminStyles (gyumin, index) {
  // Lista elem
  gyumin.style.color = "red";
  gyumin.style.padding = "0.5%";
  gyumin.style.width = "fit-content";
  gyumin.style.border = "2px solid red";
  gyumin.style.borderRadius = "6px";
  gyumin.style.fontWeight = "bold";

  // Lista Elem Indexe
  selectedGyumiIndex.style.color = "red";
  selectedGyumiIndex.style.padding = "0.5%";
  selectedGyumiIndex.style.border = "2px solid red";
  selectedGyumiIndex.style.borderRadius = "6px";
  selectedGyumiIndex.style.fontWeight = "bold";

  // Kiválasztott Elem Indexe
  selectedGyumiIndex.innerHTML = index + 1;
}


gyumolcsInput.addEventListener("input", () => {

  gyumolcsok.forEach(gyumin => {
    if (gyumolcsInput.value.toLowerCase() !== gyumin.innerHTML.toLowerCase()) {
      changeBackGyuminStyles(gyumin);
    }
  })

  gyumolcsok.forEach((gyumin, index) => {
    if (gyumolcsInput.value.toLowerCase() === gyumin.innerHTML.toLowerCase()) {
      modifySelectedGyuminStyles(gyumin, index);
    }
  })
});


