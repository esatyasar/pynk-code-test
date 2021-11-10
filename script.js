const openModal1 = document.querySelectorAll(".buttonModal-1")
const modalContainer = document.querySelectorAll("#modalContainer1")
const closeModal1 = document.querySelectorAll(".closeModal-1")

openModal1.addEventListener('click', ()=> {
    modalContainer.classList.add("show")
})
close1.addEventListener('click', ()=> {
    modalContainer.classList.remove("show")
})
