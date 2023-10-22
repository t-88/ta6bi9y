import { get, writable } from "svelte/store";
import Vector2Prop from "./props/vector2_prop";


class CodingArena {
    constructor() {
        this.cur_element = {
            pos :  new Vector2Prop(100,100),
            size : new Vector2Prop(0,0),
        };
        this.grid_size = 30;
        this.x_offset = 10;
        this.y_offset = 10;

        this.cur_selected_block = writable("");
    
        this.blocks = writable([]);
    }

    on_mouse_click(x,y) {
        this.blocks.update((val) => [...val,
            new BlockStruct(
                type = "event",
                id = get(this.cur_selected_block),
                x = get(this.cur_element.pos.x),
                y = get(this.cur_element.pos.y),
                w = get(this.cur_element.pos.y),
                h = get(this.cur_element.pos.y),
            )]);
        this.cur_selected_block.set("");
    }



    on_mouse_move(x,y) {
        this.cur_element.pos._x = x;
        this.cur_element.pos._y = y;
    }
}


const ca_state = new CodingArena();


export default ca_state;