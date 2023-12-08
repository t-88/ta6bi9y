import { get } from "svelte/store";
import { canvas_height,  canvas_width } from "$lib/state/store";

import RectWidget from "./rect_widget";

class AppWidget extends RectWidget {
    constructor() {
        super(0,0,get(canvas_width),get(canvas_height));
        this.props.fill_color._color = "#FFFFFF";
        this.id = "app";
    }

    compile_widget() {
        return {
            id : "app",
            size: [get(canvas_width),get(canvas_height)],
            color : get(this.props.fill_color.color),
            functions : get(this.functions),
            children : [],
        };
    }
}

export function create_app_widget(elem) {
    let widget = new AppWidget();
    widget.props.fill_color.color.set(elem.color || "0xFFFFFF");
    widget.functions.set(elem.functions || {});
    return widget;
}

export default AppWidget;