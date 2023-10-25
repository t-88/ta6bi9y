import { writable } from "svelte/store";


class Simulator {
    constructor() {
        this.is_running = writable(false);
    }
}


const sim = new Simulator();

export default sim;