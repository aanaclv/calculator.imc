class CalcController {
    
    constructor(){

        // atributo
        this._displayCalc = "0";
        this.dataAtual;

    }

    get displayCalc(){

        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get _dataAtual(){
        return this._dataAtual;
    }

    set dataAtual(valor){
        this._dataAtual = valor;
    }
}