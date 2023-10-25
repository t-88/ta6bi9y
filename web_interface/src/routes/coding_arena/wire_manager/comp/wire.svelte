<div bind:this={ref_div}>
    <svg>
        <line x1="{pos1.x}" y1="{pos1.y}" x2="{pos2.x}" y2="{pos2.y}"  />
    </svg>
</div>


<script>
    import { onMount } from "svelte";

    export let pos1 = {x :0, y :0};
    export let pos2 = {x :0, y :0};

    let ref_div;
    let rect;
    onMount(() => {
        rect = ref_div.getBoundingClientRect();
    });
</script>

<style>
    div {
        position: absolute;
    }
    svg {
        overflow: visible;
    }
    line {
      stroke-width: 2px; 
        stroke: #181818;
    }    
</style>