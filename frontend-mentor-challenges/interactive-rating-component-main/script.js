let selectedValue;

ul.onclick = function (event) {
  if (event.target.tagName != "LI") return;

  if (event.ctrlKey || event.metaKey) {
    singleSelect(event.target);
  } else {
    singleSelect(event.target);
  }
};

// prevent unneeded selection of list elements on clicks
ul.onmousedown = function () {
  return false;
};

function singleSelect(li) {
  let selected = ul.querySelectorAll(".selected");
  for (let elem of selected) {
    elem.classList.remove("selected");
  }
  li.classList.add("selected");
  selectedValue = li.innerHTML;
}

function success() {
  let success_screen = document.querySelectorAll(".thanks");
  success_screen.classList.add(".display");
}

let link = document.querySelectorAll("a");
link[0].addEventListener("click", success);
