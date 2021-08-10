const getPresupuestosUsuario = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    const apiCall = await fetch("http://localhost:3000/presupuestos/usuario", {
      method: 'get',
      headers: {
        "Accept": "application/json, text/plain, */*",
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    });
    let resultado = await apiCall.json();
    return resultado;
}

async function getPresupuestos() {
  let resultado = await getPresupuestosUsuario();
  console.log(resultado);
  return resultado
}


const renderPresupuestos = async () => {
  let presupuestos = await getPresupuestos();
  let templateBody = document.getElementById('template').content;
  let tablaBody = document.getElementById('tabla-body');
  const fragment = document.createDocumentFragment();

  presupuestos.forEach(data=>{
    templateBody.querySelector('th').setAttribute('id',data.id_front);
    templateBody.querySelector('th').textContent = data.id_front;
    templateBody.querySelector('#proyecto').textContent = data.proyecto;
    templateBody.querySelector('#version').textContent = data.version;
    templateBody.querySelector('#editar').setAttribute('onclick','editar("'+data.id_front+'")');
    const clone = templateBody.cloneNode(true);
    fragment.appendChild(clone);
  });
  tablaBody.appendChild(fragment);
}

renderPresupuestos()

function editar(id){
  window.location.href ="./presupuesto.html?id="+id;
}

function borrar(){
  alert("borrar");
}

function enviar(){
  alert("Se enviaron los datos")
}
