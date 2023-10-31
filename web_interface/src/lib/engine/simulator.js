import { get , writable } from "svelte/store";
import { canvas_store } from "./canvas";
import RectWidget from "./widgets/rect_widget";
import { browser } from "$app/environment";

import { canvas_height,canvas_width } from "$lib/state/store";


class Simulator {
    constructor() {
        this.is_running = writable(false);
        this.children = writable([]);

        this.width = get(canvas_width);
        this.height = get(canvas_height);
        
        this.cur_key_down = "";


        let on_event = (event) => this.on_event(event);
        if(browser) {
            this.is_running.subscribe((value) => {
                if(!value) {
                    document.removeEventListener("keydown",on_event);
                    document.removeEventListener("keydown",on_event,true);

                    document.removeEventListener("keyup",on_event);
                    document.removeEventListener("keyup",on_event,true);
                    return;
                }
                document.removeEventListener("keydown",on_event);
                document.addEventListener("keydown",on_event);

                document.removeEventListener("keyup",on_event);
                document.addEventListener("keyup",on_event);
            });
        }
    }

    log(msg) { console.log(msg); }


    copy_children() {
        let children = [];
        get(canvas_store.children).forEach((child) => {
            children.push(child.copy());
        });
        return children;
    }

    create_widget(id,props) {
        let widget = undefined;
        if(id.toLowerCase() == "rect") {
            widget = new RectWidget(...props);
            this.children.update((value) => { return [...value,widget]; });
        } 
        return widget;
    }

    find_widget(id) {
        let children = get(this.children);
        for (let i = 0; i < children.length; i++) {
            
            if(get(children[i].props.user_id) == id) {
                return children[i];
            }
        }
        return undefined;
    }

    on_start() {
        this.children.set(this.copy_children());
        get(this.children).forEach((child) =>  {
            let start_func = get(child.functions)["Start"];
            if(!start_func) { return; }

            let _ = this;
            let cur = child;

            //NOTE: calling eval is destructive, anyhow let continue
            eval(start_func);
        });

        this.on_update();


    }
    on_event(event) {
        if(event.type == "keydown") {
            this.cur_key_down = event.key;
        } else if(event.type == "keyup") {
            this.cur_key_down = "";
        }
    }

    on_update() {
        let children = get(this.children);
        let changed = false;
        let _ = this;
        let len = children.length - 1;


        for (let i =  len; i >= 0 ; i--) {
            let child = children[i];
            let cur = child;

            if(get(child.deleted)) {
                
                // console.log(i,child._x,child._y,child._w,child._h);
                // children.splice(i,1);
                // changed = true;
                continue;
            }

            let update_function = get(child.functions)["Update"];
            if(!update_function) { continue; }
            // NOTE: calling eval is destructive, anyhow let continue
            eval(update_function);
        }
        if(changed) { 
            console.log(children);
            this.children.set(children);
        }

        setTimeout(() => {
            if(!get(this.is_running)) return;
            this.on_update()
        },1/30);
    }
   
}


const sim = new Simulator();

export default sim;
