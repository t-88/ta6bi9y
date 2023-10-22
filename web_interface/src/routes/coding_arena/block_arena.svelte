<main  on:mousemove={on_mouse_move}
       on:click={on_mouse_click}
       bind:this={ref_main} 
       class="bordered"
       role="presentation"
    >
    {#each {length : y_amount} as _ , y}
        {#each {length : x_amount} as _ , x}
            <Point x={x * ca_state.grid_size} y={y * ca_state.grid_size} />
        {/each}
    {/each}



    {#each blocks as block}
    <Outline x ={ block.x }
             y ={ block.y }
             w ={ block.w }
             h ={ block.h }
        class = "outlined outline_placed"
    >
        <h2>{block.id}</h2>
    </Outline>
    {/each}

    <Outline x ={ outlined_rect.x }
             y ={ outlined_rect.y }
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
    function on_mouse_click() {
        mouse_pos = calc_mouse_offset(event,ref_main);
        ca_state.on_mouse_click(mouse_pos.x,mouse_pos.y);
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

    let blocks;
    ca_state.blocks.subscribe((val) => blocks = val);
    
    
    
    let outlined_rect = { x : 0, y : 0, w : 0, h : 0, };
    ca_state.cur_element.pos.x.subscribe((val) => { outlined_rect.x  = val; });
    ca_state.cur_element.pos.y.subscribe((val) => { outlined_rect.y  = val; });
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

    main :global(.outline_placed) {
        outline: none;
    }
</style>