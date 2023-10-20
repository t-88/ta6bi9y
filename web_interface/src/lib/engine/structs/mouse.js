import { get } from "svelte/store";

import {writable } from "svelte/store";


class MouseStruct {
    constructor() {
        this.start_x = writable(0);
        this.start_y = writable(0);
        this.x = writable(0);
        this.y = writable(0);
    }


get _start_x() {return get(this.start_x)};
    get _start_y() {return get(this.start_y)};
    get _x() {return get(this.x)};
    get _y() {return get(this.y)};

}

export default MouseStruct;