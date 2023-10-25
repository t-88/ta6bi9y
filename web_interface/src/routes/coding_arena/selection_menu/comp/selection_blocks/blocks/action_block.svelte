<SelectionTemplateBlock title={title} id={id} on_select_block={on_select_block} type={type} />



<script>
    import SelectionTemplateBlock from "../selection_template_block.svelte";

    export let on_select_block = () => {};
    export let title;
    export let id;
    let type = "action";

</script>

<style>
    
</style>