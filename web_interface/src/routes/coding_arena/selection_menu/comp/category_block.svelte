<main>
    <Button title={title} class="btn"/>
</main>


<script>
    import Button from "../../../layout_interface/comps/ui/button.svelte";
    export let title;
</script>

<style>
    main :global(.btn) {
        width: 100%;
        border-top : none;
        border-left : none; 
        border-right : none;
        
        border-radius: 0;
        padding : 15px 15px;
        text-align: start;

    }
</style>