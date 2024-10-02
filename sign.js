// Function for sign up
const btn = document.getElementById("signup-btn")
const screen = document.getElementById('screen')
const submit = document.getElementById('submit-btn')

// Get All user data ;
const user_name = document.getElementById('user-name').value
const user_email = document.getElementById('user-email').value
const user_password = document.getElementById('user-password')


btn.addEventListener('click', function () {
    screen.style.display = 'flex'
})
submit.addEventListener('click', function (event) {
    event.preventDefault();
    const user_name = document.getElementById('user-name').value
    localStorage.setItem('user_name', user_name)

    screen.style.display = 'none'
    if (user_name === user_name) {
        let userName = `${user_name}`
        const element = document.getElementById('signup-btn')
        element.style.background = 'none'
        element.style.color = 'white'
        element.textContent = `Hello, ${userName}`
    }
    else{
        user_name = false;
        return user_name
    }
})

// window.addEventListener('load', function(){
//     const saved_name = this.localStorage.getItem('user_name')
//     let userName = `${saved_name}`
//     const element = document.getElementById('signup-btn')
//     element.style.background = 'none'
//     element.style.color = 'white'
//     element.textContent = `Hello, ${userName}`
// })


