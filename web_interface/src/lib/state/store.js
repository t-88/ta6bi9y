import { writable } from "svelte/store";


const aspect_ratio        =     writable(16 / 9); 
const canvas_width        =     writable(500);
const canvas_height       =     writable(500 * 16 / 9);
const phone_top_height    =     writable(50);
const phone_bottom_height =     writable(70);

export {
    aspect_ratio        ,
    canvas_width        ,
    canvas_height       ,
    phone_top_height    ,
    phone_bottom_height ,
};




const LAYOUT_ENGINE = "layout-engine";
const CODING_ARENA = "coding-arena";
const cur_page = writable(LAYOUT_ENGINE);

const cur_selected_widget = writable("");

export {cur_page, LAYOUT_ENGINE , CODING_ARENA , cur_selected_widget}