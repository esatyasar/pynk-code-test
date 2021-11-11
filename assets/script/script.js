// Alert Variables
const buttonAlert = document.querySelector(".buttonAlert");
const alertContainer = document.querySelector(".alertContainer");
const closeAlert = document.querySelector(".closeAlert");

// Modal-1 Variables
const openModal1 = document.querySelector(".buttonModal-1");
const modalContainer = document.querySelector(".modalContainer");
const closeModal1 = document.querySelector(".closeModal-1");

// modal-2 Variables
const openModal2 = document.querySelector(".buttonModal-2");
const modalTitle = document.querySelector(".modalTitle");
const modalText = document.querySelector(".modalText");

// Popup Variables
const buttonPopup = document.querySelector(".buttonPopup");
const popupContainer = document.querySelector(".popupContainer");
const popupTitle = document.querySelector(".popupTitle");
const popupText = document.querySelector(".popupText");
const closePopup = document.querySelector(".closePopup");

// Free Action Variables
const buttonFree = document.querySelector(".buttonFree");
const freeActionSection = document.querySelector(".freeActionSection");

// Open Functions
buttonAlert.addEventListener("click", () => {
  alertContainer.classList.add("show");
});
openModal1.addEventListener("click", () => {
  modalContainer.classList.add("show");
  modalTitle.innerHTML = "Modal 1";
  modalText.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Quis, dicta? sit amet consectetur adipisicing ";
});
openModal2.addEventListener("click", () => {
  modalContainer.classList.add("show");
  modalTitle.innerHTML = "Modal 2";
  modalText.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eaque quae ut fugit consectetur adipisicing elit. Mollitia eaque quae ut fugit, deserunt quibusdam!";
});

buttonPopup.addEventListener("click", async () => {
  popupContainer.classList.add("show");
  await fetch("/assets/json/notification.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      popupText.innerHTML = data.notifications[0].content;
      popupTitle.innerHTML = data.notifications[0].title;
      closePopup.innerHTML = data.notifications[0].button_text;
    });
});
// Free Action Sections
buttonFree.addEventListener("click", () => {
  freeActionSection.classList.add("show");
  setInterval(function () {
    freeActionSection.classList.remove("show");
  }, 2500);
});

// Close Functions
closeModal1.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
closeAlert.addEventListener("click", () => {
  alertContainer.classList.remove("show");
});
closePopup.addEventListener("click", () => {
  popupContainer.classList.remove("show");
});
