const customSelects = document.querySelectorAll(".custom-select");

// Function to toggle the options visibility
function toggleOptions(select) {
    const options = select.querySelector(".options");
    options.classList.toggle("active");
}

// Function to set the selected option
function setSelectedOption(select, option) {
    const selectedOption = select.querySelector(".selected-option");
    selectedOption.textContent = option.textContent;
    toggleOptions(select);
}

// Event listeners for each custom select
customSelects.forEach((select) => {
    const options = select.querySelectorAll(".option");

    // Toggle options visibility when the custom select is clicked
    select.addEventListener("click", () => {
        toggleOptions(select);
    });

    // Set the selected option when an option is clicked
    options.forEach((option) => {
        option.addEventListener("click", () => {
            setSelectedOption(select, option);
        });
    });
});

window.addEventListener('click', () => {
    const customSelect = document.querySelector('.custom-select')
    customSelect.classList.toggle('active')
})


window.addEventListener('click', () => {
    const options = document.querySelectorAll('.option')

    options.forEach(option => {
        option.addEventListener('click', () => {
            const selectedOption = document.querySelector('.selected-option')
            selectedOption.innerText = option.innerText
        })
    })
})