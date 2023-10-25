<main class="bordered">
    <Bar title={"App"} menu_bar={false}> 
        <Button title={btn_text} class={"btn"} on_click={toggle_state}/>
    </Bar>

    {#if cur_state == "style"}
        <div id="prop-container">
            {#if selected_widget}
                {#if selected_widget.props.fill_color}
                    <BackgroundProp prop={selected_widget.props.fill_color}/>
                {/if}
                {#if selected_widget.props.size}
                    <SizeProp prop={selected_widget.props.size}/>
                {/if}            
            {/if}        
        </div>
    {:else}
    <div id="function-selection">
        <InputField class="function-input" on_change_callback={on_input_function_name} />
        <Button title={"add"} on_click={on_add_func} />
    </div>
    <div id="code-container">
        {#each Object.entries(functions) as [title, value]}
            <FunctionArea title={title} binded={value} />
        {/each}
    </div>
    {/if}

</main>

<script>
    import Bar from "../comps/ui/bar.svelte";
    import BackgroundProp from "../comps/props/background_prop.svelte";
    import SizeProp from "../comps/props/size_prop.svelte";
    import Button from "../comps/ui/button.svelte";
    import InputField from "../comps/ui/input_field.svelte";
    import FunctionArea from "./function_area.svelte";
    import pmenu_state from "$lib/engine/prop_menu";

    function toggle_state() {
        cur_state = cur_state == "style" ? "code" : "style";
        btn_text = btn_text == "Style" ? "Code" : "Style";   
    }

    function on_input_function_name(val) { function_name = val; }

    function on_add_func() {
        console.log("function_name",function_name);
        if(function_name in functions || function_name == "") return;
        functions[function_name] = "";
    }


    let selected_widget = undefined;
    pmenu_state.selected_widget.subscribe((value) => {selected_widget = value});


    let functions = {};
    let function_name = "";
    let btn_text = "Code";
    let cur_state = "style";


    


</script>


<style lang="scss">
    main {
        width: 25%;
        min-width: 350px;
    }
    #prop-container {
        margin-top: 40px;
    }
    main :global(.btn) {
        outline: none;
        border: none;
        background: transparent;
    }
    main :global(.btn:hover) { 
        color: black;
    }

    #function-selection {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        gap: 50px;
    }

    main :global(.function-input) {
        outline: 3px solid rgb(150, 150, 150);
    }
    #function-selection  :global(.function-input) {
        width: 100%;
    }
    #function-selection  :global(.function-input input) {
        text-align: start;
        color: black;
    }

    #code-container {
        padding: 20px;
    }

</style>