const openModal1 = document.querySelector(".buttonModal-1")
const modalContainer = document.querySelector("#modalContainer1")
const closeModal1 = document.querySelector(".closeModal-1")

openModal1.addEventListener("click", ()=> {
    modalContainer.classList.add("show")
})
closeModal1.addEventListener('click', ()=> {
    modalContainer.classList.remove("show")
})
