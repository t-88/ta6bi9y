import CanvasState from "./canvas_state"
import ObjMenuState from "./obj_menu_state"

class Context {
    obj_menu_state : ObjMenuState 
    canvas_state : CanvasState 
    constructor() {
        this.obj_menu_state = new ObjMenuState()
        this.canvas_state = new CanvasState()
        
    }
    obj_selected(id : string) {
        this.obj_menu_state.obj_selected(id)
    }

    obj_placed(menu_node : PointerEvent) {
        if(this.obj_menu_state.cur_selected_id == "") return

        this.canvas_state.obj_placed(menu_node,this.obj_menu_state.cur_selected_id);

    }
}
const context = new Context()

let obj_selected = (id : string) => { context.obj_selected(id) }
let canvas_obj_placed = (menu_node : PointerEvent) => { context.obj_placed(menu_node) };


let state  : any = {obj_selected , canvas_obj_placed , "canvas_objs" : context.canvas_state.objs}
export {state}
