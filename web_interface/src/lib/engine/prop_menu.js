import { writable } from "svelte/store";


class PropMenu {
    constructor() {
        this.selected_widget = writable(undefined);
    }
}



const pmenu_state = new PropMenu();
export default pmenu_state;