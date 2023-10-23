<div bind:this={ref_div} style={style}>
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


    let x_diff = pos1.x - pos2.x;
    let y_diff = pos1.y - pos2.y;
    let length = Math.sqrt(x_diff * x_diff + y_diff * y_diff);

    $: style = `
        top :  ${0}px;
        left : ${0}px;
    `; 
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