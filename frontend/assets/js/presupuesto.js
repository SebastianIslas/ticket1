let tablas;

const getProyecto = async (idPresupuesto) => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    let result = await fetch('http://localhost:3000/presupuestos/'+idPresupuesto, {
        method: 'get',
        headers: {
          "Accept": "application/json, text/plain, */*",
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        }
    })
    let resultado = await result.json()
    return resultado;
}

const determinarPresupuestos = async () => {
    urlParams = new URLSearchParams(window.location.search)
    if(urlParams.get('id') != null) {
        let proyecto = await getProyecto(urlParams.get('id'));
        console.log("Editar Presupuesto")
        console.log(proyecto)
        presupuesto(proyecto[0].mes_inicio, proyecto[0].cant_meses);
    } else{
        console.log("Nuevo Presupuesto")
        presupuesto();
    }
}

determinarPresupuestos();

function presupuesto(mes_inicio, cant_columnas){
    if(mes_inicio == undefined ||  cant_columnas == undefined){
        tablas = new Columnas(null,0);
        console.log(tablas.columnas)    
    } else{
        tablas = new Columnas(mes_inicio,cant_columnas);
        console.log(tablas.columnas)
        tablas.getMeses().forEach(mes =>{   //Renderiza todos los meses en todas las tablas
            renderizarColumna(mes);
        })
    }
}


function agregarColumna(){ //Agrega columna a todas las tablas (mes)
    if(tablas.cant_columnas == 0){  //Habilita opcion de mes inicial
        div_mes_inicio = document.getElementById("mes-inicio");
        div_mes_inicio.style.display = "block";
    } else{
        tablas.addColumn(); //Mes inicio ya existe y solo agrega un mes mas
        renderizarColumna(tablas.getLastMonth());
    }
}

function fijarMesInicio(){
    mes = document.getElementById("mes").value;
    div_mes_inicio = document.getElementById("mes-inicio");
    div_mes_inicio.style.display = "none";
    tablas.addColumn(mes);  //mes sera el mes de inicio
    console.log(tablas.columnas);
    renderizarColumna(tablas.getLastMonth()); //Renderiza el ultimo mes agregado en todas las tablas
}

function renderizarColumna(mes){    //Renderiza la columna para todas las tablas
    for(let i=0; i<2; i++) {
        let th = document.getElementById("th"+i);
        let columnFinal = document.getElementById("final"+i);
        let columna =document.createElement("th");
        columna.textContent = mes;
        th.insertBefore(columna,columnFinal);
        let tabla = document.getElementById("tabla"+i);
        for (var j = 1, row; row = tabla.rows[j]; j++) {
            row.insertCell(row.cells.length-1);
        }
    }

    for(let i=2; i<8; i++) {    
        let th = document.getElementById("th"+i);
        let columnFinal = document.getElementById("final"+i);
        let columna =document.createElement("th");
        columna.textContent = mes;
        th.insertBefore(columna,columnFinal);
        let tabla = document.getElementById("tabla"+i);
        for (var j = 1, row; row = tabla.rows[j]; j++) {
            row.insertCell(row.cells.length-2);
        }
    } 
}

function agregarFilaIngresos(id){

    if(concepto = prompt('Ingresa el nombre del concepto')){
        tabla = document.getElementById(id);
        console.log( tabla.rows[1].cells)
        tabla.insertRow(tabla.rows.length-1);
        console.log( tabla.rows[tabla.rows.length-1].cells.length)
        let pos = tabla.rows.length-1;
        
        //Agrega concepto
        tabla.rows[pos-1].insertCell(0).innerHTML = "<th></th>";
        tabla.rows[pos-1].cells[0].textContent = concepto;
        
        //Agrega celdas td que falten
        for(let i = 1; i < tabla.rows[pos].cells.length; i++){
            tabla.rows[pos-1].insertCell(i).innerHTML='<td>'+
            '<input type="text"></input>'
            '</td>';
        }
    }

}
