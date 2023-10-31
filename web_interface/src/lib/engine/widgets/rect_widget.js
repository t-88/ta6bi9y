import { get , writable } from "svelte/store";
import ColorProp from "../props/color_prop";
import Vector2Prop from "../props/vector2_prop";

import RectWidgetComp from "../../../routes/layout_interface/comps/widgets/rect_widget.svelte";
import BackgroundPropComp from "../../../routes/layout_interface/comps/props/background_prop.svelte";
import SizePropComp from "../../../routes/layout_interface/comps/props/size_prop.svelte";

class RectWidget {
    constructor(x, y, w, h,color = undefined) {
        this.id = "Rect";
        this.uuid = crypto.randomUUID();

        this.props = {
            fill_color : new ColorProp(color),
            position :  new Vector2Prop(x,y),
            size :  new Vector2Prop(w,h),
        };
        this.is_hovering_over = writable(false);

        this.component = RectWidgetComp;
        this.component_props = {rect_props : this.props};
        this.pmenu_props = {
            background: {comp : BackgroundPropComp , comp_props : {prop : this.props.fill_color} },
            size: {comp : SizePropComp , comp_props : {prop : this.props.size} },
        };

        this.functions = writable({});
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
        return rect;
    }
}


export default RectWidget;