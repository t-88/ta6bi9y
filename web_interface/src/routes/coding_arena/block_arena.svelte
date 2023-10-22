<main  on:mousemove={on_mouse_move}
       bind:this={ref_main} 
       class="bordered"
    >
    {#each {length : y_amount} as _ , y}
        {#each {length : x_amount} as _ , x}
            <Point x={x * ca_state.grid_size} y={y * ca_state.grid_size} />
        {/each}
    {/each}

    <Outline x ={ outlined_rect.x * ca_state.grid_size + 4}
             y ={ outlined_rect.y * ca_state.grid_size  + 4}
             w ={ outlined_rect.w }
             h ={ outlined_rect.h }
             class = "outlined"
    >
        <h2>{cur_selected_block}</h2>
    </Outline>
</main>


<script>
    import { onMount } from "svelte";
    import Point from "./ui/point.svelte";
    import Outline from "../canvas/ui/outline.svelte";

    import ca_state from "$lib/engine/coding_arena";
    import { calc_mouse_offset } from "$lib";
    import { AABB } from "$lib/engine/utils";

    function on_mouse_move(event) {
        mouse_pos = calc_mouse_offset(event,ref_main);
        ca_state.on_mouse_move(mouse_pos.x,mouse_pos.y);
    }
    function is_outside_outlined() {
        return !AABB(
            {
                x : mouse_pos.x,
                y : mouse_pos.y,
                w : 1,
                h : 1,
            },
            {
                x : outlined_rect.x * ca_state.grid_size + 4,
                y : outlined_rect.y * ca_state.grid_size + 4,
                w : outlined_rect.w,
                h : outlined_rect.h,
            }
        );
    }    

    onMount(() => {
        let rect = ref_main.getBoundingClientRect();
        x_amount = parseInt(rect.width  / ca_state.grid_size + 1); 
        y_amount = parseInt(rect.height / ca_state.grid_size + 1); 
    });


    let ref_main;
    let mouse_pos = {x : 0, y : 0};

    let x_amount = ca_state.grid_size;
    let y_amount = ca_state.grid_size;
    let cur_selected_block;
    ca_state.cur_selected_block.subscribe((val) => cur_selected_block = val);
    
    
    
    let outlined_rect = { x : 0, y : 0, w : 0, h : 0, };
    ca_state.cur_element.pos.x.subscribe((val) => {
        if(is_outside_outlined()) {
            outlined_rect.x  = Math.floor(val / ca_state.grid_size)
        }
    });
    ca_state.cur_element.pos.y.subscribe((val) => {
        if(is_outside_outlined()) {
            outlined_rect.y  = Math.floor(val / ca_state.grid_size)
        }        
    });
    ca_state.cur_element.size.x.subscribe((val) => outlined_rect.w = val);
    ca_state.cur_element.size.y.subscribe((val) => outlined_rect.h = val);

</script>

<style>
    main  {
        overflow: hidden;
        width: 100%;
        position: relative;
    }
    main h2 {
        margin: 0;
        padding: 0;
        color: white;
    } 

    main :global(.outlined) {
        background-color: black;
        border-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }

</style>