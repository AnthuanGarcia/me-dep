export class Project {
    title: string;
    desc: string;
    langs: string[];
    imgs: string[];
    mobil: boolean;

    constructor(){
        this.title = "";
        this.desc = "";
        this.langs = [];
        this.imgs = [];
        this.mobil = false;
    }
}