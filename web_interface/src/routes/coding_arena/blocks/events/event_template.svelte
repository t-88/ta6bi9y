<main>
    <TemplateBlock class="child" title={title} on_click={() => on_click({w :60, h : 250})} />
</main>

<script>
    import TemplateBlock from "../template_block.svelte";
    

    export let title = "";
    export let on_click = () => {};
</script>


<style>
</style>