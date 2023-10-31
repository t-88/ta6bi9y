<main class="bordered">
    {#if is_running}
        <div class="overlay"></div>
    {/if}
    <Bar title={"App"} menu_bar={false}> 
        <Button title={btn_text} class={"btn"} on_click={toggle_state}/>
    </Bar>

    {#if cur_state == "style"}
        <div id="prop-container">
            {#if selected_widget}
                {#each Object.entries(selected_widget.pmenu_props) as [title,prop]}
                
                    <svelte:component this={prop.comp} {...prop.comp_props} />
                {/each}
                <!-- {#if selected_widget.props.fill_color} -->
                    <!-- <BackgroundProp prop={selected_widget.props.fill_color}/> -->
                <!-- {/if} -->
                <!-- {#if selected_widget.props.size} -->
                    <!-- <SizeProp prop={selected_widget.props.size}/> -->
                <!-- {/if}             -->
            {/if}        
        </div>
    {:else}
    <div id="function-selection">
        <InputField class="function-input" on_change_callback={on_input_function_name} />
        <Button title={"add"} on_click={on_add_func} />
    </div>
    <div id="code-container">
        {#each Object.entries(sw_functions) as [title, value]}
            <FunctionArea title={title} binded={value}  on_change={(elem) => on_type_function_code(title,elem)} />
        {/each}
    </div>
    {/if}

</main>

<script>
    import pmenu_state from "$lib/engine/prop_menu";
    import sim from "$lib/engine/simulator";
    import { get } from "svelte/store";

    import Bar from "../comps/ui/bar.svelte";
    import BackgroundProp from "../comps/props/background_prop.svelte";
    import SizeProp from "../comps/props/size_prop.svelte";
    import Button from "../comps/ui/button.svelte";
    import InputField from "../comps/ui/input_field.svelte";
    import FunctionArea from "./function_area.svelte";


    function toggle_state() {
        cur_state = cur_state == "style" ? "code" : "style";
        btn_text = btn_text == "Style" ? "Code" : "Style";   
    }

    function on_input_function_name(val) { function_name = val; }
    function on_add_func() {
        if(function_name in sw_functions || function_name == "") return;
        get(pmenu_state.selected_widget).functions.update((value) => {
            value[function_name] = "";
            return value;
        });
    }

    function on_type_function_code(func_title,elem_textarea) {
        get(pmenu_state.selected_widget).functions.update((value) => {
            value[func_title] = elem_textarea.target.value;
            return value;
        }); 
    }


    let sw_functions = {};
    let selected_widget = undefined;
    pmenu_state.selected_widget.subscribe((value) => {
        selected_widget = value;
        get(pmenu_state.selected_widget)?.functions.subscribe((value) => sw_functions = value);
    });


    let function_name = "";
    let btn_text = "Code";
    let cur_state = "style";


    let is_running;
    sim.is_running.subscribe((val) => is_running = val);
    


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

    .overlay {
        height: 100%;
        width: 100%;
        background: rgba(128, 128, 128, 0.1);
        position: absolute;
        z-index: 2;
    }

</style>