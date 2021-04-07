export default class Palabra{
    
    public frecuencia: number;
    public termino: string;

    constructor(frecuencia: number = 0, termino: string = '' ){
        this.frecuencia = frecuencia;
        this.termino = termino;
    }
}