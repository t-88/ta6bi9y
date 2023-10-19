import { setContext } from "svelte";


const aspect_ratio = 16 / 9; 
const canvas_width =  500;
const canvas_height = canvas_width * aspect_ratio;
const phone_top_height = 50;
const phone_bottom_height = 70;



function init_context() {
    setContext("canvas_width" ,canvas_width);
    setContext("canvas_height",canvas_height);
    setContext("phone_top_height",phone_top_height);
    setContext("phone_bottom_height",phone_bottom_height);
    
}


export {init_context}



