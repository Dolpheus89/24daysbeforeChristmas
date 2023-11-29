// fenetre modal

const modalContainer = document.querySelector(".modal-container");
const modalTrigger = document.querySelectorAll(".modal-trigger");

modalTrigger.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
  modalContainer.classList.toggle("active");
}

// select message

const titleElement = document.querySelector(".modal h1");
const pElement = document.querySelector(".modal p");

const title = ["", "Test1", "Test2"];
const message = ["", "Message1", "Message2"];

function changeContent(classList) {
  const caseNumb = classList[1];
  const index = parseInt(caseNumb.replace("case", ""));
  titleElement.innerHTML = title[index];
  pElement.innerHTML = message[index];
}

for (let i = 1; i <= 24; i++) {
  let elements = document.getElementsByClassName("case" + i);

  Array.from(elements).forEach(function (element) {
    element.addEventListener("click", function () {
      changeContent(element.classList);
    });
  });
}
