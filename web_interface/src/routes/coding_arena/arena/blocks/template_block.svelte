<main class = {$$props.class} style={style}>
    {#if placed}
        {#if has_prev_connector}
            <div bind:this={ref_prev_connector} role="presentation" class="prev-connector connector" on:click={() => {connector_selected("prev")}}></div>
        {/if}
        {#if has_next_connector}
            <div bind:this={ref_next_connector} role="presentation" class="next-connector connector" on:click={() => {connector_selected("next")}}></div>
        {/if}

        {#if has_right_connector}
            <div bind:this={ref_right_connector} role="presentation" class="right-connector connector" on:click={() => {connector_selected("right")}}></div>
        {/if}
    {/if}
</main>
<script>
    import ca_state from "$lib/engine/coding_arena";
    import { onMount } from "svelte";
    
    function connector_selected(type) {
        ca_state.connector_selected(type,block_pointer);
    }
    onMount(() => {
        if(block_pointer) {
            block_pointer.update((val) => {
                return {
                    ...val,
                    elem_ref_prev_connected: ref_prev_connector,
                    elem_ref_next_connected: ref_next_connector,
                    ref_right_connector: ref_next_connector,
                    
                }
            })
            block_pointer.subscribe((val) => {
                block = {x : val.x, y : val.y , w : val.w , h : val.h};
            });
        }
    });

    
    export let block_pointer = undefined;
    export let placed = false;
    export let block = {x : 0, y : 0 , w : 0 , h : 0};
    export let has_prev_connector = true;
    export let has_next_connector = true;
    export let has_right_connector = false;
    


    let ref_prev_connector = undefined;
    let ref_next_connector = undefined;
    let ref_right_connector = undefined;




    
    $: style = `
        left:   ${block.x}px;
        top:    ${block.y}px;
        width:  ${block.w}px;
        height: ${block.h}px;
        ${placed ? "outline: none;" : ""}
    `; 

</script>

<style>
    .connector {
        width:  18px;
        height: 18px;
        background: black;
        position: absolute;
        left: calc(50% - 18px / 2);
    }
    .connector:hover {
        background-color:  rgb(25, 170, 255);
    }

    .prev-connector {
        top: calc(18px / -2);
    }
    .next-connector {
        bottom: calc(18px / -2);
    }

    main {
        position: absolute;
        background-color: transparent;
        border: none;
        outline:  4px rgb(25, 170, 255) solid;
    
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }
</style>