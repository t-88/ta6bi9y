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
    }

    get _x() { return this.props.position._x; }
    get _y() { return this.props.position._y; }
    get _w() { return this.props.size._x; }
    get _h() { return this.props.size._y; }

    set _x(value) { return this.props.position._x = value; }
    set _y(value) { return this.props.position._y = value; }
    set _w(value) { return this.props.size._x = value; }
    set _h(value) { return this.props.size._y = value; }

}


export default RectWidget;