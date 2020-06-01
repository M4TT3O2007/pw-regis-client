import {writeToken} from './jwt.js'


const url = "http://localhost:8080/pw-regis/resources/login";

const login = (e) => {
    e.preventDefault();
    const auth = {

        usr: usrn.value,
        pwd: pswd.value
    }
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(auth)
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);

        }
        return response.json();
    }).then(data => {
        const { token } = data;
        writeToken(token);
        console.log(token);
        window.location.href = 'posts.html';
    }).catch(error => {
        console.log('si e verificato un errore durante fetch:' + error
        );
    }
    )
}


const usrn = document.querySelector("#usr");
const pswd = document.querySelector("#pwd");
const sub = document.querySelector("#log");
sub.addEventListener('click', login);