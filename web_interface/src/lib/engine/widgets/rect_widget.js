import { get } from "svelte/store";

import RectStruct from "../structs/rect";
class RectWidget {
    constructor(x, y, w, h) {
        this.rect =  new RectStruct(x,y,w,h);
        this.id = "Rect";
        
    }

    get _x() { return this.rect._x; }
    get _y() { return this.rect._y; }
    get _w() { return this.rect._w; }
    get _h() { return this.rect._h; }

}


export default RectWidget;