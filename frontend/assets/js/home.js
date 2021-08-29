//Obtiene todos los presupuestos del usuario
const getPresupuestosUsuario = async () => {
  try {
    const resultado = await api.fetch('presupuestos','GET','');
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
    templateBody.querySelector('#borrar').setAttribute('onclick','borrar("'+data.id_front+'")');
    const clone = templateBody.cloneNode(true);
    fragment.appendChild(clone);
  });
  tablaBody.appendChild(fragment);
}

renderPresupuestos()


const agregar = async () => {
  try {
    let id_front = document.getElementById("id_front").value;
    let proyecto = document.getElementById("proyecto_post").value;
    let version = document.getElementById("version_post").value;
    let body = { id_front, proyecto, version };
    console.log(body)

    if(validarTxt(id_front) || validarTxt(proyecto) || validarTxt(version)){
      throw ('Ingresa los datos')
    } else{
      await api.fetch('presupuestos','POST', body)
      alert('Presupuesto creado con exito')
      window.location.href = './home.html'
    }
  }catch(error){
    console.log("Entro")
    alert(error);
  }

}

function editar(id){
  window.location.href ="./presupuesto.html?id="+id;
}

const borrar = async (id) => {
  if(confirm('¿Seguro que desea eliminar este presupuesto?')){
    try {
      await api.fetch(`presupuestos/${id}`,'DELETE', '')
      alert('Presupuesto eliminado con exito')
      window.location.href = './home.html'
    }catch(error){
       alert(error);
    }  
  }
}

function enviar(){
  alert("Se enviaron los datos")
}
