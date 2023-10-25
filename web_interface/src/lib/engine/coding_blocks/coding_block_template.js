import TemplateBlock from "../../../routes/coding_arena/arena/blocks/template_block.svelte";

export default  class CodingBlockTemplate {
    constructor(id,type,x = 0, y = 0 , w = 0 , h = 0,elem_block = undefined) {
        this.elem_block = elem_block || TemplateBlock;
        this.props = {
            placed : true, 
        };

        this.type = "template";
        this.title = id.slice(0,1).toUpperCase() + id.slice(1); 

        this.id = id;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    
        this.prev_connected = undefined;
        this.next_connected = undefined;


        this.prev_connected_uuid = crypto.randomUUID().slice(0,4);
        this.next_connected_uuid = crypto.randomUUID().slice(0,4);
        this.elem_ref_prev_connected = undefined;
        this.elem_ref_next_connected = undefined;


    }


}