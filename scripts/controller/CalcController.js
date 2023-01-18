class CalcController {
    //método é umafunção, porém dentro de uma classe
    //atributo é uma variável mas dentro de uma classe.
    //Uma classe é um conjunto de aatributos e métodos
    //instancia é um objeto que representa uma classe 
    
    //DOM - Document object model
    //BOM - Browser object model
    constructor(config) //métodos ou funções sempre precisam de parâmetros
    {
        this._displayCalc = "0"; //o this faz referência ao objeto instanciado  dessa classe
            //this referencia atributos métodos
        this.currentDate; //ISSO É UM ATRIBUTO, é similar a uma variável mas tem mais recursos
        this.initialize();
        //encapsulamento protege quem acessa o que
        // O underline a seguir:
        //      this._displayCalc = "0";
        //      aponta que o atributo é privado
    }

    //renderiza primeiro
    //está dentro do objeto então posso referir com this
    initialize(){


    }

    //GET e SET 
    //Definem como acessar os valores

    //displaycalc
    get displayCalc(){
        return this._displayCalc;

    }
    set displayCalc(valor){
        this.displayCalc = valor;
    }


    //dataatual
    get currentDate(){
        return this.currentDate;
    }
    set currentDate(valor){
        this._currentDate = valor;
    }

}   