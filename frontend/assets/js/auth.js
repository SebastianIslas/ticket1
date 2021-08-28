
const login = async () => {
    try {
        let usuario = document.getElementById("usuario").value;
        let password = document.getElementById("password").value;
        let formData = { usuario, password };
        let res = await api.fetch('login','POST',formData);
        console.log("Entro")
        localStorage.setItem('token',JSON.stringify(res));
        window.location.href = './home.html'
    } catch (error) {
        alert(error.message)     
    }

};
