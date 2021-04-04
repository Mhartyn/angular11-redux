import { i18nMetaToJSDoc } from "@angular/compiler/src/render3/view/i18n/meta";

export default class Usuario{
    
    public nombre: string;
    public email: string;
    public password: string;
    public img: string;
    public _id?: string;

    public tipo_documento: string;
    public num_documento: string;
    public telefono: string;
    public direccion: string;
    public rol: string;
    public estado: string;
    public createdAt: string;
    
    constructor(nombre: string = '', email: string = '', password: string = '', img: string = '' ){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.img = img;
        this.tipo_documento = '';
        this.num_documento = '';
        this.telefono = '';
        this.direccion = '';
        this.rol = '';
        this.estado = '';
        this.createdAt = '';
    }
}