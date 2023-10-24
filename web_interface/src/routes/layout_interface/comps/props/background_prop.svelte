<TemplateProp title={"Background"}>
    <div>
        <ColorSelector color={prop._color} on_change={on_select_color} />
        <h2>{prop._color}</h2>
        <InputField  placeholder="Opacity" max_chars={3} value={100} on_change_callback={on_change_opacity} />
    </div>
</TemplateProp>


<script>
    import TemplateProp from "./template_prop.svelte";
    import ColorSelector from "../ui/color_selector.svelte";
    import InputField from "../ui/input_field.svelte";

    function on_select_color(color) {
        prop._color = color.toLocaleUpperCase();
    }
    function on_change_opacity(value) { }

    export let prop;
</script>


<style lang="scss">
    h2 {
        font-weight: normal;
    }
    div {
        display: flex;
        gap: 10px;
        margin: auto;
        align-items: center;
        justify-content: space-around;
    }
</style>