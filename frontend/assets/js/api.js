class Api {
    url = 'http://localhost:3000/';

    async fetch(ruta, method, body){
        try {
            const request = { 
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            method == 'POST' || method == 'PUT' ?  request.body = JSON.stringify(body) : '';
            localStorage.getItem('token') ? request.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`: '';
            const response = await fetch(this.url+ruta, request);
            const res = await response.json();
            if(response.status % 400 <= 100 || response.status % 500 <= 100 ){
                throw new Error(res)
            }
            return res;
        } catch (error) {
            throw (error);
        }
    }
}

const api = new Api();