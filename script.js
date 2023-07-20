window.addEventListener('click', () => {
    const customSelect = document.querySelector('.custom-select')
    customSelect.classList.toggle('active')

    if (customSelect.classList.contains('active')) {
    customSelect.style.boxShadow = '5px 5px yellow'
    }
    else {
        customSelect.style.boxShadow = '0px 0px yellow'
    }
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

window.addEventListener('click', () => {
    const customSelect = document.querySelector('.custom-select')

})