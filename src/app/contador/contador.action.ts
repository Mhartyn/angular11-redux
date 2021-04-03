import { Action } from "@ngrx/store";

export const INCREMENTAR = '[contador] Incrementar';
export const DECREMENTAR = '[contador] Decrementar';
export const DUPLICAR = '[contador] Duplicar';
export const MITAD = '[contador] Mitad';
export const RESET = '[contador] Reset';

export class IncrementarAction implements Action{
    readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action{
    readonly type = DECREMENTAR;
}

export class ResetAction implements Action{
    readonly type = RESET;
}

export class DuplicarAction implements Action{
    readonly type = DUPLICAR;

    constructor(public payload: number) { }
}

export class MitadAction implements Action{
    readonly type = MITAD;

    constructor(public payload: number){}
}

export type actions = Action |
                      IncrementarAction | 
                      DecrementarAction | 
                      DuplicarAction | 
                      MitadAction |
                      ResetAction;
                      