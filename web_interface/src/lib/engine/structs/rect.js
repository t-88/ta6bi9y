import {get, writable } from "svelte/store";


class RectStruct {
    constructor(x = 0, y = 0,w = 100 , h = 100) {
        this.x = writable(x);
        this.y = writable(y);
        this.w = writable(w);
        this.h = writable(h);
    }

    get _x() { return get(this.x); }
    get _y() { return get(this.y); }
    get _w() { return get(this.w); }
    get _h() { return get(this.h); }
}

export default RectStruct;