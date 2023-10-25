<main bind:this={ref_element} role="presentation" class={$$props.class} on:click={on_click_callback}>
    <h1>{title}</h1>
</main>


<script>
    export let on_select_block = () => {};
    export let id = "template";
    export let title = "template";
    export let type = "template";
    let ref_element;


    function on_click_callback() {
        let rect = ref_element.getBoundingClientRect();
        on_select_block({id,type,title,w :rect.width, h : rect.height});
    }

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