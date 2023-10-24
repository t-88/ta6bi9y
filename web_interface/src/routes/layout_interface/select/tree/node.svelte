<div class={widget.uuid == cur_selected?.uuid ? "is_hovered" : "" }>
    <h1 style="margin: {depth * depth_dis + offset}px;">{widget.id}</h1>
</div>


<script>
    import pmenu_state from "$lib/engine/prop_menu";

    const offset = 30;
    const depth_dis = 30;

    export let depth = 0;
    export let widget; 

    let is_hovering_over = widget._is_hovering_over;
    let cur_selected = undefined;
    
    widget.is_hovering_over.subscribe((value) => {is_hovering_over = value});
    pmenu_state.selected_widget.subscribe((value) => {cur_selected = value});

</script>


<style>
    h1 {
        margin: 10px;
    }
    div {
        cursor: pointer;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
    }
    .is_hovered {
        border-top: 4px solid rgb(22, 130, 255);
        border-bottom: 4px solid rgb(22, 130, 255);
    }
</style>

