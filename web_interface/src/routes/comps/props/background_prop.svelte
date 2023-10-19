<TemplateProp title={"Background"}>
    <div>
        <ColorSelector on_change={on_select_color} />
        <h2 bind:this={ref_color_text}>#FFFFFF</h2>
        <InputField placeholder="Opacity" max_chars={3} value={100} on_change={on_change_opacity} />
    </div>
</TemplateProp>


<script>
    import TemplateProp from "./template_prop.svelte";
    import ColorSelector from "../ui/color_selector.svelte";
    import InputField from "../ui/input_field.svelte";


    let ref_color_text;

    function on_select_color(color) {
        ref_color_text.textContent = color.toLocaleUpperCase() ;
    }

    function on_change_opacity(value) {
    }
</script>


<style lang="scss">
    h2 {
        font-weight: normal;
    }
    div {
        display: flex;
        gap: 10px;
        width: 80%;
        margin: auto;
        align-items: center;
        justify-content: space-around;
    }
</style>