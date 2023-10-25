<SelectionTemplateBlock title={title} id={id} on_select_block={on_select_block} type={type} />



<script>
    import SelectionTemplateBlock from "../selection_template_block.svelte";

    export let on_select_block = () => {};
    export let id;
    export let title = id.slice(0,1).toUpperCase() + id.slice(1);
    let type = "event";


</script>

<style>
    
</style>