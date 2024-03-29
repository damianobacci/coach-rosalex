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
  let rating_screen = document.querySelectorAll(".rating");
  result.innerHTML = selectedValue;
  if (selectedValue == undefined) {
    alert("You must select a choice first");
  } else {
    success_screen[0].style.display = "block";
    rating_screen[0].style.display = "none";
  }
}

let link = document.querySelectorAll("a");
link[0].addEventListener("click", success);
