import { get } from "svelte/store";
import { canvas_height,  canvas_width } from "$lib/state/store";

import RectWidget from "./rect_widget";

class AppWidget extends RectWidget {
    constructor() {
        super(0,0,get(canvas_width),get(canvas_height));
        this.props.fill_color._color = "#FFFFFF";
        this.id = "App";


        delete this.pmenu_props.size;
    }
}


export default AppWidget;