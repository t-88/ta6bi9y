<main
       role="presentation"
       on:mousemove={on_mouse_move}
       on:click={on_mouse_click}
       bind:this={ref_main} 
       class="bordered"
    >

    <PointGrid x_count={x_amount} y_count={y_amount} grid_size={ca_state.grid_size} />

    <div>
        {#each blocks as block}
            <svelte:component this={get(block).elem_block} placed={true} block_pointer = {block} class = "outlined outline_placed">
                <h2>{get(block).id}</h2>
            </svelte:component>
        {/each}
    </div>

    {#if cur_selected_block != ""}
        <TemplateBlock placed={false} block={outlined_rect} class = "outlined" >
            <h2>{cur_selected_block}</h2>
        </TemplateBlock>
    {/if}

    <WireManager id={"arena-wire-manager"} />
</main>


<script>
    import { onMount } from "svelte";
    import { get } from "svelte/store";
    import ca_state from "$lib/engine/coding_arena";
    import { calc_mouse_offset } from "$lib";

    import TemplateBlock from "./blocks/template_block.svelte";
    import PointGrid from "./comp/point_grid.svelte";
    import WireManager from "../wire_manager/wire_manager.svelte";


    function on_mouse_move(event) {
        mouse_pos = calc_mouse_offset(event,ref_main);
        ca_state.on_mouse_move(mouse_pos.x,mouse_pos.y);
    }
    function on_mouse_click(event) {
        mouse_pos = calc_mouse_offset(event,ref_main);
        ca_state.on_mouse_click(mouse_pos.x,mouse_pos.y);
        ca_state.place_block(mouse_pos.x,mouse_pos.y);
    }

    let ref_main;
    let mouse_pos = {x : 0, y : 0};

    let cur_selected_block;
    ca_state.cur_selected_block.subscribe((val) => cur_selected_block = val);
    let blocks;
    ca_state.blocks.subscribe((val) => { blocks = val; });
    
    


    let x_amount;
    let y_amount;
    let outlined_rect = { x : 0, y : 0, w : 0, h : 0, };
    onMount(() => {
        let rect = ref_main.getBoundingClientRect();
        x_amount = parseInt(rect.width  / ca_state.grid_size + 1); 
        y_amount = parseInt(rect.height / ca_state.grid_size + 1); 

        ca_state.cur_element.pos.x.subscribe((val) => { outlined_rect.x  = val; });
        ca_state.cur_element.pos.y.subscribe((val) => { outlined_rect.y  = val; });
        ca_state.cur_element.size.x.subscribe((val) => outlined_rect.w = val);
        ca_state.cur_element.size.y.subscribe((val) => outlined_rect.h = val);
    });

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

    main :global(#arena-wire-manager) {
        position: absolute;
        top: 0;
        left: 0;
    }

</style>