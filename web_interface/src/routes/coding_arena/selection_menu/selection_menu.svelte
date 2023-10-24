<section class="category-selection bordered">
    <CategoryBlock title={"Events"}/>
    <CategoryBlock title={"Functions"}/>
</section>
<section class="block-selection bordered">
    <EventTemplate title={"Start"}  on_click={(args) => {on_select_event({...args,title : "Start"})}} />
    <EventTemplate title={"Update"} on_click={(args) => {on_select_event({...args,title : "Update"})}}/>
    <DebugAction on_click={(args) => {on_select_event({...args,title : "Debug"})}}/>
</section>


<script>
    import "../../global.css"
    import CategoryBlock from "./comp/category_block.svelte";
    import EventTemplate from "./comp/selection_blocks/events/event_template.svelte";
    import DebugAction from "./comp/selection_blocks/actions/debug_action.svelte";

    import ca_state from "$lib/engine/coding_arena";
    function on_select_event(args) {
        ca_state.cur_element.size._x = args.w;
        ca_state.cur_element.size._y = args.h;
        ca_state.cur_selected_block.set(args.title);
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