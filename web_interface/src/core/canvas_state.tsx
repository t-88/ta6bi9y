class CanvasState {
    last_offset : Map<string,number>;
    canvas_node? : HTMLElement;

    objs : Array<any>; 
    constructor() {
        this.last_offset = new Map<string,number>()
        this.objs = new Array<string>; 
    }
    obj_placed(mouse_event : PointerEvent, obj_id : string) {
        let rect =  (mouse_event.target as HTMLElement).getBoundingClientRect();

        this.canvas_node = mouse_event.target as HTMLElement;
        

        this.last_offset.set("x", mouse_event.clientX - rect.left);
        this.last_offset.set("y", mouse_event.clientY - rect.top);

        this.objs.push({
            "type": "rectangle",
            "x": this.last_offset.get("x"), 
            "y": this.last_offset.get("y"),
        })
    }   
}


export default CanvasState;