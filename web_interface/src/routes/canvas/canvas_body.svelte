<main   id="canvas-body" role="presentation" 
        on:click={on_mouse_click}
        on:mousedown={on_mouse_down} 
        on:mouseup={on_mouse_up} 
        on:mousemove={on_mouse_drag}
        bind:this={ref_canvas}>


        {#each children as child}
            {#if child.id == "Rect"} 
                <RectWidget x={child._x} y={child._y} w={child._w} h={child._h}/>
            {/if}
        {/each}

        {#if cur_widget} 
            <RectWidget x={cur_widget._x} y={cur_widget._y} w={cur_widget._w} h={cur_widget._h}/>
        {/if}

        {#if cur_hovered} 
            <Outline x={cur_hovered._x} y={cur_hovered._y} w={cur_hovered._w} h={cur_hovered._h}/>
        {/if}
</main>


<script>
    import "../global.css"
    import { canvas_store  } from "$lib/engine/core";
    import RectWidget from "../comps/widgets/rect_widget.svelte";
    import Outline from "./ui/outline.svelte";


    function on_mouse_click(_) { 
        canvas_store.on_mouse_click(mouse_pos.x,mouse_pos.y);
    }
    function on_mouse_down(_) {
        mouse_down = true;
        canvas_store.on_mouse_down(mouse_pos.x,mouse_pos.y);
    }
    function on_mouse_up(_) {
        mouse_down = false;
        canvas_store.on_mouse_up(mouse_pos.x,mouse_pos.y);
    }
    function on_mouse_drag(event) { 
        mouse_pos =  { x : parseInt(event.clientX - ref_canvas.getBoundingClientRect().x)  , y : parseInt(event.clientY - ref_canvas.getBoundingClientRect().y)};
        canvas_store.on_mouse_move(mouse_pos.x,mouse_pos.y);

        if(!mouse_down) {return;} 
        canvas_store.on_mouse_drag(mouse_pos.x,mouse_pos.y);
    }


    let ref_canvas;
    let mouse_pos = {x : 0, y : 0};

    let children = [];
    let mouse_down = false;
    let cur_widget = undefined;
    let cur_hovered = undefined;

    canvas_store.chidlren.subscribe(value => { children = [...value]; });
    canvas_store.cur_widget.subscribe(value => {  cur_widget =  value; });
    canvas_store.cur_hovered.subscribe(value => {  cur_hovered =  value; });
</script>


<style lang="scss">
    main {
        height: 100%;
        position: relative;
        overflow: hidden;
    }    
</style>