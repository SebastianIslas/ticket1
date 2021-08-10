formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let formData = { usuario, password };
    
    fetch('http://localhost:3000/login',{
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST"
    })
    .then( res => res.json())
    .then( data => {
        localStorage.setItem('token',JSON.stringify(data));
        window.location.href = './home.html'
    }).catch(error => {
        alert("Usuario Invalido");
    })
});
