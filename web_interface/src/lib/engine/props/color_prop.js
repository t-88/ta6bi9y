import { get, writable } from "svelte/store";
import TemplateProp from "./template_prop";

export default class ColorProp extends TemplateProp {
    constructor() {
        super();
        this.color = writable("#181818");
        this.id = "color";
    }

    get _color() { return get(this.color); }
    set _color(value) { return this.color.set(value); }
};