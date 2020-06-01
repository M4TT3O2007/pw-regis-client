
const url = "http://localhost:8080/pw-regis/resources/users";

const registration = (e) => {
    e.preventDefault();
    const user = {
        firstName: fnam.value,
        lastName: lname.value,  
        usr: usrn.value,
        pwd: pswd.value,
        birthDate : bday.value
    }
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(user)
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }).then(data => {
        console.log(data);
        window.location.href = 'login.html';
    }).catch(error => {
        console.log("si è verificato un problema durante l'operazione fetch:", error);
    })
}

const fnam = document.querySelector("#firstName");
const lname = document.querySelector("#lastName");
const usrn = document.querySelector("#usr");
const pswd = document.querySelector("#pwd");
const bday = document.querySelector("#birthDate");
const sub = document.querySelector("#registrati");
sub.addEventListener('click',registration);