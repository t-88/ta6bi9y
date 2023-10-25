import { get, writable } from "svelte/store";
import Vector2Prop from "./props/vector2_prop";
import { AABB_exp } from "./utils";
import CodingBlockTemplate from "./coding_blocks/coding_block_template";
import EventBlock from "./coding_blocks/event_block";


let block_mapper = {
    event : {
        start  : (id,x,y,w,h) => new EventBlock(id,x,y,w,h),
        update : (id,x,y,w,h) => new EventBlock(id,x,y,w,h),
        end    : (id,x,y,w,h) => new EventBlock(id,x,y,w,h, { has_prev_connector : true, has_next_connector : false}),
    },
    action : {
        debug : (id,x,y,w,h) => new CodingBlockTemplate(id,"action",x,y,w,h),
    }
}
class CodingArena {
    constructor() {
        this.grid_size = 30;
        this.x_offset = 10;
        this.y_offset = 10;

        this.cur_element = {
            pos :  new Vector2Prop(this.grid_size * 5,this.grid_size * 5),
            size : new Vector2Prop(0,0),
            id : writable(""),
            type : writable(""),
        };


        this.blocks = writable([]);



        this.cur_next_connector = undefined;
        this.cur_prev_connector = undefined;
        this.cur_connector_type = "";

        this.wires = writable({});
    }

    move_to_mouse_pos(x,y) {
        if(get(this.cur_element.id) == "") {
            this.cur_element.pos._x =  Math.floor(x /  this.grid_size) * this.grid_size;
            this.cur_element.pos._y =  Math.floor(y /  this.grid_size) * this.grid_size;
            return;            
        }


        if(AABB_exp(x,y,1,1,this.cur_element.pos._x,this.cur_element.pos._y,this.cur_element.size._x,this.cur_element.size._y))  return
        let dir_x =  this.cur_element.pos._x > x ? -1 : 1;
        let dis_x = 0; 
        if(x > this.cur_element.pos._x + this.cur_element.size._x) {
            dis_x = Math.ceil(Math.abs(x - (this.cur_element.pos._x + this.cur_element.size._x)) / this.grid_size);
        } else if(this.cur_element.pos._x > x) {
            dis_x = Math.ceil((this.cur_element.pos._x - x) / this.grid_size);
        }
        this.cur_element.pos._x =  this.cur_element.pos._x + this.grid_size  * dis_x * dir_x;

        let dir_y =  this.cur_element.pos._y > y ? -1 : 1;
        let dis_y = 0; 
        if(y > this.cur_element.pos._y + this.cur_element.size._y) {
            dis_y = Math.ceil(Math.abs(y - (this.cur_element.pos._y + this.cur_element.size._y)) / this.grid_size);
        } else if(this.cur_element.pos._y > y) {
            dis_y = Math.ceil((this.cur_element.pos._y - y) / this.grid_size);
        }
        this.cur_element.pos._y =  this.cur_element.pos._y + this.grid_size  * dis_y * dir_y;
    }

    place_block(x,y) {
        if(get(this.cur_element.id) == "") return;

        this.blocks.update((val) => {
            return [
                ...val,
                writable(block_mapper[get(this.cur_element.type)][get(this.cur_element.id)](
                        get(this.cur_element.id),
                        get(this.cur_element.pos.x),
                        get(this.cur_element.pos.y),
                        get(this.cur_element.size.x),
                        get(this.cur_element.size.y),
                ))
            ];
        })

        // if(get(this.cur_element.type) == "event") {
        //     this.blocks.update((val) => [...val,
        //         writable(
        //             new EventBlock(
        //                 get(this.cur_element.id),
        //                 get(this.cur_element.pos.x),
        //                 get(this.cur_element.pos.y),
        //                 get(this.cur_element.size.x),
        //                 get(this.cur_element.size.y),
        //             )
        //         )]);
        // } else {
        //     this.blocks.update((val) => [...val,
        //         writable(
        //             new CodingBlockTemplate(
        //                 get(this.cur_element.id),
        //                 "template",
        //                 get(this.cur_element.pos.x),
        //                 get(this.cur_element.pos.y),
        //                 get(this.cur_element.size.x),
        //                 get(this.cur_element.size.y),
        //             )
        //         )]);
        // }


        
        this.cur_element.id.set("");
        this.cur_element.size._x = 0; this.cur_element.size._y = 0;
    }

    on_mouse_click(x,y) {
    }
    on_mouse_move(x,y) {
        this.move_to_mouse_pos(x,y);    
    }



    connector_selected(type,pointer) {
        if(type == "prev") this.cur_prev_connector = pointer;
        else if(type == "next") this.cur_next_connector = pointer;
        else console.assert(false,`unreachable underfinded connector type '${type}'`); 


        if(this.cur_connector_type == type) {
            return;
        }

        if(this.cur_connector_type == "") {
            this.cur_connector_type = type;
            return;
        }


        // update block connections
        this.cur_prev_connector.update((v) => {return {...v,prev_connected:this.cur_next_connector}}); 
        this.cur_next_connector.update((v) => {return {...v,next_connected:this.cur_prev_connector,}}); 

        // update wiring
        this.wires.update((v) => {
            delete v[v[get(this.cur_next_connector).next_connected_uuid]];
            v[get(this.cur_next_connector).next_connected_uuid] = this.cur_next_connector;
            return v;
        });


        this.cur_prev_connector = undefined;
        this.cur_next_connector = undefined;
        this.cur_connector_type = "";
    }
}


const ca_state = new CodingArena();


export default ca_state;