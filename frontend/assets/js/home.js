const getPresupuestosUsuario = async () => {
  try {
    const resultado = await api.fetch('presupuestos/usuario','GET','');
    return resultado;
  } catch (error) {
    window.location.href = './index.html';
  }
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
