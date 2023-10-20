<TemplateSelect name={"Rect"} on_select={on_select}>
    <div class="icon"></div>
</TemplateSelect>

<script>
    import { cur_selected_widget } from "$lib/state/store";

    import TemplateSelect from "./template_select.svelte";

    function on_select() {
        cur_selected_widget.set("Rect");
    }
</script>

<style>
    .icon {
        width:  30px;
        height: 30px;
        background-color: black;
    }
</style>