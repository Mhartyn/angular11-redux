import { i18nMetaToJSDoc } from "@angular/compiler/src/render3/view/i18n/meta";

export default class Usuario{
    
    public nombre: string;
    public email: string;
    public password: string;
    public _id?: string;
    
    constructor(nombre: string = '', email: string = '', password: string = '' 
    ){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}