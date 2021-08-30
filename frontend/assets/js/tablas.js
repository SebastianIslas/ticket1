class FlujoEfectivo{
    constructor(){
        this.tabla = document.getElementById("flujo-efectivo");
    }

    async render(){
        console.log("DATOS DE TABLA FLUJO EFECTIVO")
        this.tabla = document.getElementById("flujo-efectivo");
        let data = await api.fetch(`presupuestos/${urlParams.get('id')}/flujo`,'GET','');
        console.log(data);
        let i = 0;
        columnas.getMeses().forEach(mes =>{   //Renderiza todos los meses en la tabla dada
            this.renderMes(mes, data[i].ingresos, data[i].num_mes )
            i = i+1;
        })
    }


    async addMes(){
        this.tabla = document.getElementById("flujo-efectivo");
        if(columnas.cant_columnas == 0){  //Habilita opcion de mes inicial
            let div_mes_inicio = document.getElementById("mes-inicio");
            div_mes_inicio.style.display = "block";
            return
        }
        columnas.addColumn();

        //Si dejaba la siguiente linea salia que renderMes is not a function y no encontre como arreglarlo

//        this.renderMes(columnas.getLastMonth(), 0 )


        //Tipo de etiquetas para cada row en esta tabla
        //Agrea el mes con el numero de mes siguente al ultimo existente
        columnas.renderizarColumna(columnas.getLastMonth(), 0);
        for (let j = 1, row; row = this.tabla.rows[j]; j++) {
            row.insertCell(row.cells.length-1);
            if(j == 1){
                row.cells[row.cells.length-2].innerHTML = `<input id="FE-${columnas.columnas.length-1 + columnas.mes_inicio}" value="0" name="ingresos"></input>`
            }
        }
    }

    async actFlujoEfectivo(){
        this.tabla = document.getElementById("flujo-efectivo");
        try {
            let ingresos;
            let body = {
                proyecto: datosProyecto[0].id_front,
                mes_inicio: datosProyecto[0].mes_inicio,
                version: datosProyecto[0].version,
                cant_meses: columnas.cant_columnas,
            };
            let bodyIngresos = {};
            let max = columnas.cant_columnas + columnas.mes_inicio
            console.log(columnas.mes_inicio)
            for (let j = columnas.mes_inicio; j<max; j++) {
                ingresos = document.getElementById("FE-"+j).value;
                bodyIngresos[j] = ingresos
            }
            console.log(bodyIngresos)
            await api.fetch(`presupuestos/${datosProyecto[0].id_front}`,'PUT', body);
            await api.fetch(`presupuestos/${datosProyecto[0].id_front}/flujo`,'PUT', bodyIngresos);
            alert('Cambios guardados con exito')
            window.location.reload(true)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    async crearBodyIngresos(){
        let ingresos;
        console.log("ENTROO")
        let body = [];
        let max = columnas.cant_columnas + columnas.mes_inicio
        for (let j = columnas.mes_inicio; j<max; j++) {
            ingresos = document.getElementById("FE-"+j).value;
            body.push({[j] : ingresos})
        }
        console.log(body)
        return body;
    }

    async mesInicio(){
        this.tabla = document.getElementById("flujo-efectivo");
        let mes = document.getElementById("mes").value;
        let div_mes_inicio = document.getElementById("mes-inicio");
        div_mes_inicio.style.display = "none";
        columnas.addColumn(mes);
        console.log(columnas.columnas);
        console.log(datosProyecto[0].proyecto)
        let body = {
            proyecto: datosProyecto[0].proyecto,
            version: datosProyecto[0].version,
            mes_inicio: mes,
            cant_meses: columnas.cant_columnas,
        };
        await api.fetch(`presupuestos/${datosProyecto[0].id_front}`,'PUT', body);
        let ingresosBody = {
            ingresos: 0,
            num_mes: parseInt(columnas.cant_columnas) + parseInt(columnas.mes_inicio) -1
        }
        //            num_mes: this.ingresos[ingresos.length-1].num_mes + 1
        console.log("ingresosBody")
        console.log(ingresosBody)
        console.log(ingresosBody.num_mes)
        await api.fetch(`presupuestos/${datosProyecto[0].id_front}/flujo`,'POST', ingresosBody);
        window.location.reload()
        //        this.renderMes(columnas.getLastMonth(), 0, ingresosBody.num_mes )
    }

    async renderMes(mes, value, num_mes){
        this.tabla = document.getElementById("flujo-efectivo");
        columnas.renderizarColumna(mes, 0);
        //Tipo de etiquetas para cada row en esta tabla
        for (let j = 1, row; row = this.tabla.rows[j]; j++) {
            row.insertCell(row.cells.length-1);
            if(j == 1){
                row.cells[row.cells.length-2].innerHTML = `<input id="FE-${num_mes}" value="${value}" name="ingresos"></input>`
            }
        }
    }
}

class EstadoResultados{
    constructor(){
        this.tabla = document.getElementById("estado-resultados");
    }

    async render(){
        console.log("DATOS DE TABLA ESTADO RESULTADOS")
        this.tabla = document.getElementById("estado-resultados");
        let data = await api.fetch(`presupuestos/${urlParams.get('id')}/estRes`,'GET','');
        console.log(data);
        let i = 0;
        columnas.getMeses().forEach(mes =>{   //Renderiza todos los meses en la tabla dada
            this.renderMes(mes, data[i].ingresos, data[i].num_mes )
            i = i+1;
        })
    }

    async actFlujoEfectivo(){
        this.tabla = document.getElementById("estado-resultados");
        try {
            let ingresos;
            let body = {
                proyecto: datosProyecto[0].id_front,
                mes_inicio: datosProyecto[0].mes_inicio,
                version: datosProyecto[0].version,
                cant_meses: columnas.cant_columnas,
            };
            let bodyIngresos = {};
            let max = columnas.cant_columnas + columnas.mes_inicio
            for (let j = columnas.mes_inicio; j<max; j++) {
                ingresos = document.getElementById("FE-"+j).value;
                bodyIngresos[j] = ingresos
            }
            console.log(bodyIngresos)
            await api.fetch(`presupuestos/${datosProyecto[0].id_front}`,'PUT', body);
            await api.fetch(`presupuestos/${datosProyecto[0].id_front}/estRes`,'PUT', bodyIngresos);
            alert('Cambios guardados con exito')
            window.location.reload(true)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    async crearBodyIngresos(){
        let ingresos;
        console.log("ENTROO")
        let body = [];
        let max = columnas.cant_columnas + columnas.mes_inicio
        for (let j = columnas.mes_inicio; j<max; j++) {
            ingresos = document.getElementById("ER-"+j).value;
            body.push({[j] : ingresos})
        }
        console.log(body)
        return body;
    }

    async renderMes(mes, value, num_mes){
        this.tabla = document.getElementById("estado-resultados");
        columnas.renderizarColumna(mes, 0);
        //Tipo de etiquetas para cada row en esta tabla
        for (let j = 1, row; row = this.tabla.rows[j]; j++) {
            row.insertCell(row.cells.length-1);
            if(j == 1){
                row.cells[row.cells.length-2].innerHTML = `<input id="ER-${num_mes}" value="${value}" name="ingresos"></input>`
            }
        }
    }
}




let flujoEfectivo = new FlujoEfectivo();
let estadoResultados = new EstadoResultados();