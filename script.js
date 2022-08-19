const mainContainer = document.querySelector(".main")
const thankYouContainer = document.querySelector(".thankyou-container")
const buttons = document.querySelectorAll(".ratings");
const ratingNumberSelected = document.getElementById("rating");
const submitButton = document.querySelector("#submit")

submitButton.addEventListener("click", () => {
    thankYouContainer.classList.remove("no-display")
    mainContainer.classList.add("no-display")
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        ratingNumberSelected.innerHTML = button.innerHTML
    })
});


