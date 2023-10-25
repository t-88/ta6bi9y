<section class="category-selection bordered">
    <CategoryBlock title={"Events"}/>
    <CategoryBlock title={"Functions"}/>
</section>
<section class="block-selection bordered">
    <EventBlock   id="start" on_select_block={on_select_block}  />
    <EventBlock  id="update" on_select_block={on_select_block}  />
    <EventBlock id="end" on_select_block={on_select_block}  />
    <ActionBlock title="Debug" id="debug" on_select_block={on_select_block}  />
</section>


<script>
    import "../../global.css"
    import CategoryBlock from "./comp/category_block.svelte";
    import EventBlock from "./comp/selection_blocks/blocks/event_block.svelte";
    import ActionBlock from "./comp/selection_blocks/blocks/action_block.svelte";

    import ca_state from "$lib/engine/coding_arena";
    function on_select_block(args) {
        ca_state.cur_element.size._x = args.w;
        ca_state.cur_element.size._y = args.h;
        ca_state.cur_element.id.set(args.id);
        ca_state.cur_element.type.set(args.type);
    }
</script>

<style>
    .category-selection {
        width: 150px;
        min-width: 150px;

        border-right: none;
        box-sizing: border-box;

        cursor: pointer;
    }


    .block-selection {
        width: 250px;
        min-width: 250px;
        border-right: none;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;

        padding: 40px 20px;
    }

</style>