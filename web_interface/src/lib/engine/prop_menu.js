import { get, writable } from "svelte/store";


class PropMenu {
    constructor() {
        this.selected_widget = writable(undefined);
    }

    get _selected_widget() {return get(this.selected_widget);}
    set _selected_widget(value) {this.selected_widget.set(value);}
}



const pmenu_state = new PropMenu();
export default pmenu_state;