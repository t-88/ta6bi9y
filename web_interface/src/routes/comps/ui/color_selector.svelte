<div  style={`background: ${color};`} class="color-selector bordered" on:click={show_color_selector}>
    <input bind:this={ref_input} type="color" on:change={select_color}>
</div>


<script>
    let ref_input;
    let color = "#FFFFFF";

    export let on_change = () => {};

    function show_color_selector() {
        ref_input.click();
    }
    function select_color() {
        color = ref_input.value;
        on_change(color);
    }
</script>


<style>
    .color-selector {
        width:  35px;
        height: 35px;
        
        border-radius: 5px;
        position: relative;
        background-color: white;
    }
    input {
        position: absolute;
        width: 0;
        height: 0;
        z-index: -1;
    }
</style>


