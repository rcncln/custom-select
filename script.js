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