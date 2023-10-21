import { get, writable } from "svelte/store";
import TemplateProp from "./template_prop";

export default class Vector2Prop extends TemplateProp {
    constructor(x = 0, y = 0) {
        super();
        this.x = writable(x);
        this.y = writable(y);
        this.id = "vector2";
    }
    

    get _x() { return get(this.x); }
    get _y() { return get(this.y); }

    set _x(value) { this.x.set(value); }
    set _y(value) { this.y.set(value); }
};