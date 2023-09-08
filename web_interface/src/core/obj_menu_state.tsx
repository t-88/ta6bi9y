class ObjMenuState {
    cur_selected_id : string = ""

    constructor() {
    }
    obj_selected(id : string) {
        this.cur_selected_id = id
        console.log(this.cur_selected_id)
    }   
}
export default ObjMenuState;