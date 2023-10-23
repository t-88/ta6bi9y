<section>
    {#each {length : y_count} as _ , y}
        {#each {length : x_count} as _ , x}
            <Point x={x * grid_size} y={y * grid_size} />
        {/each}
    {/each}
</section>


<script>
    import Point from "./point.svelte";

    export let y_count;
    export let x_count;
    export let grid_size;
</script>

<style>
    section {
        width: 100%;
        height: 100%;
    }    
</style>