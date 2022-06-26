let auth = null;
let isLoggedIn = sessionStorage.getItem('name');
window.addEventListener("load", () => {
    if (isLoggedIn) document.location = './index.html';
})

let user_data = {
    'user_name': 'Chris',
    "user_password": "upwork"
}

function send_auth() {
    let username = document.getElementById('username').value,
        password = document.getElementById('password').value;
    console.log(`username`, username)
    ;
    if (username.toLowerCase() == user_data.user_name.toLowerCase() && password.toLowerCase() == user_data.user_password.toLowerCase()) {
        sessionStorage.setItem('name', username);
       
        document.location = './index.html'
    } else{
        alert('sorry, the info you entered was incorrect')
        document.location = './login.html'
    }
    
}