const loadPost = (url) =>{
fetch(url,{
    method:'GET',
    mode : 'cors',
    headers :{
        'Authorization': 'Bearer' + token
    },
}).then(response => {
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}).then(data => {
    renderPost(data);
}).catch(error =>{
    console.log('si è verificato un errore durante fetch :',error);
    
})
}


const renderPost = (data)=>{

     
}