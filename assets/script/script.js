const buttonAlert = document.querySelector(".buttonAlert");
const alertContainer = document.querySelector(".alertContainer");
const closeAlert = document.querySelector(".closeAlert");

const openModal1 = document.querySelector(".buttonModal-1");
const modalContainer = document.querySelector(".modalContainer");
const closeModal1 = document.querySelector(".closeModal-1");

const openModal2 = document.querySelector(".buttonModal-2");
const modal2Title = document.querySelector(".title");
const modal2Text = document.querySelector(".text");

const buttonPopup = document.querySelector(".buttonPopup");
const popupContainer = document.querySelector(".popupContainer");
const popupTitle = document.querySelector(".popupTitle");
const popupText = document.querySelector(".popupText");
const closePopup = document.querySelector(".closePopup");

// Open Functions
buttonAlert.addEventListener("click", () => {
  alertContainer.classList.add("show");
});
openModal1.addEventListener("click", () => {
  modalContainer.classList.add("show");
});
openModal2.addEventListener("click", () => {
  modalContainer.classList.add("show");
  modal2Title.innerHTML = "Modal 2";
  modal2Text.innerHTML =
    "lorem sit amet consetur gurtarid elit. laborum voluptas est dolerem euroem aliuid ,fugiat adipspsci ratioyun? Illo, maxime ut velit expedias ad alitionem asperidas.";
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

//Close Functions
closeModal1.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
closeAlert.addEventListener("click", () => {
  alertContainer.classList.remove("show");
});
closePopup.addEventListener("click", () => {
  popupContainer.classList.remove("show");
});
