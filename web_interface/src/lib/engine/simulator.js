import { get , writable } from "svelte/store";
import { canvas_store } from "./canvas";
import RectWidget from "./widgets/rect_widget";


class Simulator {
    constructor() {
        this.is_running = writable(false);

        this.children = writable([]);
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
        if(id.toLowerCase() == "rect") {
            this.children.update((value) => { return [...value,new RectWidget(...props)]; });
        } 
    }

    start() {
        this.children.set(this.copy_children());
        // cur.props.fill_color._color = "#FF0000";
        // _.log(cur);
        get(this.children).forEach((child) =>  {
            let start_func = get(child.functions)["Start"];
            if(!start_func) { return; }

            let _ = this;
            let cur = child;
            
            console.log(start_func);
            // calling eval destructive, anyhow let continue
            eval(start_func);
        });
    }


}


const sim = new Simulator();

export default sim;
