export default  class BlockStruct {
    constructor(type,id,x = 0, y = 0 , w = 0 , h = 0,elem_block = undefined) {
        this.elem_block = elem_block;


        this.type = type;
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