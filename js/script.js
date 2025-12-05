const toggleButton = document.getElementById('theme-toggle')
const savedTheme = localStorage.getItem('theme')

if(savedTheme === 'light') {
    document.body.classList.add('light')
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light')
    if(document.body.classList.contains('light')) {
        localStorage.setItem('theme','light')
    } else {
        localStorage.setItem('theme','dark')
    }
})


const form = document.getElementById('contact-form')
const successMessage = document.getElementById('form-success')

form.addEventListener('submit', function(e){
    e.preventDefault()
    successMessage.style.display = 'block'
    form.reset()
})
