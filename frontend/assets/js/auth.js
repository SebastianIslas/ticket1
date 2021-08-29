
const login = async () => {
    try {
        let usuario = document.getElementById("usuario").value;
        let password = document.getElementById("password").value;
        let formData = { usuario, password };
        if(validarTxt(usuario) || validarTxt(password)){
            throw ('Ingresa los datos')
        } else{
            let res = await api.fetch('login','POST',formData);
            console.log("Entro")
            localStorage.setItem('token',JSON.stringify(res));
            window.location.href = './home.html'
        }
    } catch (error) {
        alert(error)
    }

};
