let columnas;
let datosProyecto;

const btnAgregarColumna = document.getElementById('agregarColumna');
const btnActFlujoEfectivo = document.getElementById('actFlujoEfectivo');
const btnFijarMesInicio = document.getElementById('aplicar-mes-inicio');

window.onload = async () => {
    btnAgregarColumna.addEventListener('click', flujoEfectivo.addMes);
    //Actualiza datos de tabla Flujo Efectivo y cant de meses al presupuesto
    btnActFlujoEfectivo.addEventListener('click', flujoEfectivo.actFlujoEfectivo);
    btnFijarMesInicio.addEventListener('click', flujoEfectivo.mesInicio);
//    btnFijarMesInicio.addEventListener('click', () => { agregarTitulo("ingresos") });

    console.log("++++ Datos del presupuesto +++++")
    await determinarPresupuesto();
    flujoEfectivo.render();
//    estadoResultados.render();

}

const determinarPresupuesto = async () => {
    try {
        urlParams = new URLSearchParams(window.location.search)
        datosProyecto = await api.fetch('presupuestos/'+urlParams.get('id'),'GET','');
        presupuesto(datosProyecto[0].mes_inicio, datosProyecto[0].cant_meses);
        console.log(datosProyecto)
        console.log("++++ Datos del presupuesto ++++++")
    } catch (error) {
        console.log(error)
    }
}

function presupuesto(mes_inicio, cant_columnas){
    if(mes_inicio == undefined ||  cant_columnas == undefined){
        columnas = new Columnas(null,0);
        console.log(columnas.columnas)    
    } else{
        columnas = new Columnas(mes_inicio,cant_columnas);
        console.log(columnas.columnas)
    }
}



function renderizarColumna(mes, i){    //Renderiza el mes para la tabla con el id 'tablai', ej: tabla0
    //i = numero de tabla asignado por mi desde el front para renderizar
    if(i <2){   //Tienen la misma estructura
        let th = document.getElementById("th"+i);
        let columnFinal = document.getElementById("final"+i);
        let columna =document.createElement("th");
        columna.textContent = mes;
        th.insertBefore(columna,columnFinal);
        let tabla = document.getElementById("tabla"+i);
        for (let j = 1, row; row = tabla.rows[j]; j++) {
            row.insertCell(row.cells.length-1);
        }
    } else if(i<8){ ////Tienen la misma estructura de tabla3 a tabla7
        let th = document.getElementById("th"+i);
        let columnFinal = document.getElementById("final"+i);
        let columna =document.createElement("th");
        columna.textContent = mes;
        th.insertBefore(columna,columnFinal);
        let tabla = document.getElementById("tabla"+i);
        for (let j = 1, row; row = tabla.rows[j]; j++) {
            row.insertCell(row.cells.length-2);
        }
    } else{
        alert('La tabla no existe')
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
