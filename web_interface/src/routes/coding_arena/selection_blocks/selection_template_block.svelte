<main role="presentation" class={$$props.class} on:click={() => on_click({w :240, h : 60})}>
    <h1>{title}</h1>
    <slot />

</main>


<script>
    export let title;
    export let on_click;
</script>

<style>
    main {
        height: 60px;
        width: 240px;
        background-color: #41AF59;
        border-radius: 5px;

        display: flex;
        align-items: center;
        cursor: pointer;
    }
    h1 {
        margin: 0;
        padding: 0;
        margin: auto;
        color: white;
    }
</style>