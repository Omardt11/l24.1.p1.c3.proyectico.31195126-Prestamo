
export default class Cl_oficina {
    constructor({montCaja, porcComisionMensual}){
        this.montCaja = montCaja;
        this.porcComisionMensual = porcComisionMensual;
        this.prestamos = [];
    }
    set montCaja(c){
        this._montCaja = +c;
    }
    get montCaja(){
        return this._montCaja;
    }
    set porcComisionMensual(pc){
        this._porcComicionMensual = +pc;
    }
    get porcComisionMensual(){
        return this._porcComicionMensual;
    }
    agregarPrestamo(prestamo){
        this.prestamos.push(prestamo);
    }
    eliminarPrestamo(codigo){
        let indiceprestamo = -1;
        for (let i = 0; i < this.prestamos.length; i++){
            if (this.prestamos[i].codigo == codigo) {
                indiceprestamo = i ;
            }
        }
        if (indiceprestamo !== -1)
            this.prestamos.splice(indiceprestamo, 1);
        return indiceprestamo !== -1;
    }
    modificarPrestamo(codigo, cliente, prestamo,meses){
        let indicePrestamo = -1;
        for(let i = 0; i <this.prestamos.length; i++){
            if(this.prestamos[i].codigo == codigo){
                this.prestamos[i] = {codigo, cliente, prestamo, meses};
                indicePrestamo = i;
            }
        }
        return indicePrestamo !== -1;
    
    }
    montPagar(i){
        let porcComicion = 0;
        let monto = 0;
        porcComicion = (this.prestamos[i].prestamo * 0.05) * this.prestamos[i].meses;
        monto = this.prestamos[i].prestamo + porcComicion;
        return monto;
    }
    montFinalDisponible(){
        let montCaja = this._montCaja;
        let montPrestamo = 0;
            for(let i = 0; i < this.prestamos.length; i++){
                montPrestamo += this.prestamos[i].prestamo;
            }
         let montFinal = montCaja - montPrestamo;
        return montFinal;
    }
    clientesPrestamos2Meses(){
        let prestamosResult = [];
    for (let i = 0; i < this.prestamos.length; i++)
      if (this.prestamos[i].meses == 2)
        prestamosResult.push(this.prestamos[i]);
    return prestamosResult;
    // return this.prestamos.filter((prestamos) => prestamos.meses == 2);
    }
    prestamoMinimo(){
        let minimo = 99999999999;
        for(let i = 0; i < this.prestamos.length; i++){
            if( this.prestamos[i].prestamo < minimo){
                minimo = this.prestamos[i].prestamo;
            }
        }
        return minimo;
    }
    clientesPrestamoMinimo(){
        return this.prestamos.filter((prestamos) => prestamos.prestamo == this.prestamoMinimo())
    }

}
