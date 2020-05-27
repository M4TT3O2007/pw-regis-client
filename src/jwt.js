const decode = () => {
    const json =JSON.parse(atob(token.split('.')[1]));
}

const isValid =()=> {
    const {exp} = decode(token);
    const now = Date.now();
     return exp *1000 - now >0;

}
const readToken = () =>{
    return window.localStorage.getItem('token');
}
const writeToken = (token) => {
    window.localStorage.setItem("token",token);
}

export {
    decode,isValid,readToken,writeToken
}