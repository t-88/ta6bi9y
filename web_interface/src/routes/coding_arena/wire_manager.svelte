<main bind:this={ref_wire_manager} id={$$props.id} class={$$props.class}>
    {#each wires as wire}
        <Wire pos1={wire.pos1} pos2={wire.pos2} />
    {/each}
</main>

<script>
    import { get } from "svelte/store";
    import ca_state from "$lib/engine/coding_arena";

    import Wire from "./ui/wire.svelte";
    import { onMount } from "svelte";


    function clac_center(elem) {
        let parent_offset = ref_wire_manager.getBoundingClientRect();
        let rect = elem.getBoundingClientRect();
        return {
            x : Math.floor(rect.x + rect.width / 2 - parent_offset.x)  ,
            y : Math.floor(rect.y + rect.height / 2 - parent_offset.y) ,
        }
    }
    function on_wires_update(v) {
        wires = [];
        for(const uuid in v) {
            let pos1 = clac_center(get(v[uuid]).elem_ref_next_connected);
            let pos2 = clac_center(get(get(v[uuid]).next_connected).elem_ref_prev_connected);

            wires.push({pos1 : pos1,pos2 : pos2});
        }
    }

    let wires = [];
    let ref_wire_manager;


    onMount(() => {
        ca_state.wires.subscribe((v) => on_wires_update(v));
    });
</script>

<style>
    main {
        position: absolute;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
</style>