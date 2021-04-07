import { i18nMetaToJSDoc } from "@angular/compiler/src/render3/view/i18n/meta";

export default class Tweet{
    
    public count: number;
    public _id?: string;

    constructor(count: number = 0, _id: string = '' ){
        this.count = count;
        this._id = _id;
    }
}