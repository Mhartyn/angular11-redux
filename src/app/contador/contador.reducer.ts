import { DECREMENTAR, DUPLICAR, INCREMENTAR, MITAD, RESET, actions } from "./contador.action";

export function contadorReducer(state: number = 10, accion: actions){
    switch (accion.type) {
        case INCREMENTAR:
            return state + 1;
        case DECREMENTAR:            
            return state - 1;
        case DUPLICAR:
            return state * 2;
        case MITAD:
            return state / 2;
        case RESET:
            return state = 0;
        default:
            return state;
    }
}