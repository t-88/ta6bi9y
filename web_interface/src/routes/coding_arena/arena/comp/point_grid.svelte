<section>
    <svg>
        {#each {length : y_count} as _ , y}
            {#each {length : x_count} as _ , x}
                <circle cx="{x * grid_size}" cy="{y * grid_size}" r="4" color="red" />
            {/each}
        {/each}

    </svg>
</section>


<script>

    export let y_count;
    export let x_count;
    export let grid_size;
</script>

<style>
    section {
        width: 100%;
        height: 100%;
    }    
    svg {
        overflow: visible;
    }
    circle {
        fill: rgba(128, 128, 128, 0.2);
    }
</style>