import { i18nMetaToJSDoc } from "@angular/compiler/src/render3/view/i18n/meta";

export default class Post{
    
    public favorite_count: number;
    public retweet_count: number;
    public id_str: string;
    public screen_name: string;
    public _id?: string;
    public created_at: string;
    public full_text: string;
    public location: string;
    public source: string;
    public pos: string;
    
    constructor(favorite_count: number = 0, retweet_count: number = 0, id_str: string = '', screen_name: string = '', created_at: string = '', full_text: string = '', location: string = '', source: string = '', pos: string = '' ){
        this.favorite_count = favorite_count;
        this.retweet_count = retweet_count;
        this.screen_name = screen_name;
        this.id_str = id_str;
        this.created_at = created_at;
        this.full_text = full_text;
        this.location =location;
        this.source = source;
        this.pos = pos;
    }
}