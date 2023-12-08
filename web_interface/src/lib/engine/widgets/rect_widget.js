import { get , writable } from "svelte/store";
import ColorProp from "../props/color_prop";
import Vector2Prop from "../props/vector2_prop";

import RectWidgetComp from "../../../routes/layout_interface/comps/widgets/rect_widget.svelte";
import BackgroundPropComp from "../../../routes/layout_interface/comps/props/background_prop.svelte";
import SizePropComp from "../../../routes/layout_interface/comps/props/size_prop.svelte";
import UserIdPropComp from "../../../routes/layout_interface/comps/props/user_id_prop.svelte";

class RectWidget {
    constructor(x, y, w, h,color = undefined, user_uuid = "") {
        this.type = "rect";
        // this.uuid = crypto.randomUUID();

        this.props = {
            fill_color : new ColorProp(color),
            position :  new Vector2Prop(x,y),
            size :  new Vector2Prop(w,h),
            user_id : writable(""),
        };
        this.is_hovering_over = writable(false);

        this.component = RectWidgetComp;
        this.component_props = {rect_props : this.props};
        this.pmenu_props = {
            background: {comp : BackgroundPropComp , comp_props : {prop : this.props.fill_color} },
            size: {comp : SizePropComp , comp_props : {prop : this.props.size} },
            user_id: {comp : UserIdPropComp , comp_props : {prop : this.props.user_id, placeholder : "user id"} },
            
        };
        this.functions = writable({});

        this.user_data = {};
        this.deleted = writable(false);
    }

    get _x() { return this.props.position._x; }
    get _y() { return this.props.position._y; }
    get _w() { return this.props.size._x; }
    get _h() { return this.props.size._y; }
    get _is_hovering_over() {return get(this.is_hovering_over);}

    set _x(value) { this.props.position._x = parseInt(value); }
    set _y(value) { this.props.position._y = parseInt(value); }
    set _w(value) { this.props.size._x =     parseInt(value); }
    set _h(value) { this.props.size._y =     parseInt(value); }
    set _is_hovering_over(value) {this.is_hovering_over.set(value);}


    copy() {
        let rect = new RectWidget(this._x,this._y,this._w,this._h,this.props.fill_color._color);
        rect.functions.set(get(this.functions));
        rect.props.user_id.set(get(this.props.user_id));
        return rect;
    }

    AABB(rect) {
        return rect._x + rect._w > this._x && rect._y + rect._h > this._y &&
               this._x + this._w > rect._x && this._y + this._h > rect._y;
    }


    compile_widget() {
        return {
            id : get(this.props.user_id),
            size: [get(this.props.size.x),get(this.props.size.y)],
            pos: [get(this.props.position.x),get(this.props.position.y)],
            color : get(this.props.fill_color.color),
            functions : get(this.functions),
        };
    }
}
export default RectWidget;


export function create_rect_widget(elem) {
    let widget = new RectWidget(elem.pos[0],elem.pos[1],elem.size[0],elem.size[1]);
    widget.props.user_id.set(elem.id);
    widget.functions.set(elem.functions);

    return widget;
}
