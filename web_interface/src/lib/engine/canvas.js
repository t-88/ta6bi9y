import { get, writable } from "svelte/store";
import { AABB } from "./utils";
import {cur_selected_widget } from "$lib/state/store";
import pmenu_state from "./prop_menu";


import MouseStruct from "./structs/mouse";
import RectWidget from "./widgets/rect_widget";
import AppWidget from "./widgets/app_widget";


class CanvasStore {
    constructor() {
        this.children = writable([
            new AppWidget(),
        ]);
        this.mouse_data = new MouseStruct();

        this.cur_widget = writable(undefined);
        this.cur_hovered = writable(undefined);

        this.is_draging_mouse = false;  
    }

    get _children() { return get(this.children);}


    calc_cur_widge_size() {
        if(!get(this.cur_widget)) return;

        get(this.cur_widget)._w = this.mouse_data._x - this.mouse_data._start_x;
        get(this.cur_widget)._h = this.mouse_data._y - this.mouse_data._start_y;

        if(get(this.cur_widget)._w  < 0){
            get(this.cur_widget)._x = this.mouse_data._x ;
            get(this.cur_widget)._w = Math.abs(get(this.cur_widget)._w);
        } 
        if(get(this.cur_widget)._h  < 0){
            get(this.cur_widget)._y = this.mouse_data._y;
            get(this.cur_widget)._h = Math.abs(get(this.cur_widget)._h);
        }         
        this.cur_widget.update((value) => value);
    }
    
    on_mouse_down(x , y) {
        if(get(cur_selected_widget) == "") return;

        this.mouse_data.start_y.set(y);
        this.mouse_data.start_x.set(x);
        this.mouse_data.x.set(x);
        this.mouse_data.y.set(y);

        this.cur_widget.set(new RectWidget(x,y,0,0));
    }
    on_mouse_up() {
        if(get(cur_selected_widget) == "") return;

        if(this.mouse_data._x == this.mouse_data._start_x && this.mouse_data._y == this.mouse_data._start_y) {
            get(this.cur_widget)._w = 100;
            get(this.cur_widget)._h = 100;
        }

        this.children.update((old) => [...old,get(this.cur_widget)]);
        this.cur_widget.set(undefined);
        this.is_draging_mouse = false;

        cur_selected_widget.set("");
    }
    on_mouse_drag(x,y) {
        this.mouse_data.x.set(x);
        this.mouse_data.y.set(y);
        this.is_draging_mouse = true;

        this.calc_cur_widge_size();


    }
    on_mouse_click(x,y) {
        this.mouse_data.start_y.set(x);
        this.mouse_data.start_x.set(y);
        this.mouse_data.x.set(x);
        this.mouse_data.y.set(y);

        if(get(this.cur_hovered) != undefined) {
            pmenu_state.selected_widget.set(get(this.cur_hovered));
        }

    }

    on_mouse_move(x,y) {
        let mouse = {x : x , y : y, w : 1, h : 1};
        let _cur_hovered = undefined;
        
        for (let i = 0; i < get(this.children).length; i++) {
            let rect = get(this.children)[i];
            rect = {x : rect._x,y : rect._y,w : rect._w,h : rect._h,}

            if(AABB(mouse, rect )) {
                get(this.children)[i]._is_hovering_over = true;
                _cur_hovered = get(this.children)[i];
            } else {
                get(this.children)[i]._is_hovering_over = false;
            }
        }
        this.cur_hovered.set(_cur_hovered);
    } 
}

const canvas_store = new CanvasStore();

export {canvas_store}
