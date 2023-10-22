import { get , writable } from "svelte/store";
import ColorProp from "../props/color_prop";
import Vector2Prop from "../props/vector2_prop";
class RectWidget {
    constructor(x, y, w, h) {
        this.id = "Rect";
        this.uuid = crypto.randomUUID();

        this.props = {
            fill_color : new ColorProp(),
            position :  new Vector2Prop(x,y),
            size :  new Vector2Prop(w,h),
        };


        this.is_hovering_over = writable(false);
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



}


export default RectWidget;