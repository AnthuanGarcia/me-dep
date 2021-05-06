export class Project {
    title: string;
    desc: string;
    langs: string[];
    imgs: string[];

    constructor(){
        this.title = "";
        this.desc = "";
        this.langs = [];
        this.imgs = [];
    }
}