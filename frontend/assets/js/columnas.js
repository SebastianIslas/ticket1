const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

class Columnas{
    constructor(mes_inicio, cant_columnas){
        this.mes_inicio = mes_inicio;
        this.cant_columnas = cant_columnas;
        if(this.cant_columnas == 0){
            this.columnas = [];
        } else{
            this.columnas = this.setColumnas();
        }
    }

    // Agrega columna (La clase no guarda los meses como tal, esos se obtienen cada que se piden con getColumnas)
    async addColumn (mes_inicio){
        if(this.mes_inicio == null){
            this.mes_inicio = mes_inicio;
        }
        this.cant_columnas++;
        this.columnas = this.setColumnas();
    }

    async renderizarColumna(mes, i){
        //i = Numero de tabla a la que se le realizara el render
        //k = Cant de elementos a restar para recorrer las columnas TOTAL y ELIMINAR
        //etiquetas_perz = Funcion que determinara que filas tendran algun input o algo diferente
        let th = document.getElementById("th"+i);
        let columnFinal = document.getElementById("final"+i);
        let columna =document.createElement("th");
        columna.textContent = mes;
        th.insertBefore(columna,columnFinal);
        i++;
    }

    //Regresa los meses despues de mes_inicio
    setColumnas(){
        let columnas = [];
        let mes = this.mes_inicio;
        columnas.push(meses[mes]);
        //Obtiene los meses despues del mes inicial
        for(let i = 0; i < this.cant_columnas-1; i++){
            mes++;
            if(mes == 12){
                mes = 0;
            }
            columnas.push(meses[mes])
        }
        return columnas;
    }
    
    getLastMonth(){
        console.log(this.columnas)
        return this.columnas[this.columnas.length-1];
    }
    getMeses(){
        return this.columnas;
    }
}