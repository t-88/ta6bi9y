<main   role="presentation" 
        class={`input ${is_focused ? "input-field-focued" : "input_field"} ${$$props.class}`}
        id = {$$props.id}
        on:click={() => {ref_input.focus()}}  
> 
    {#if placeholder != ""}
        <div>{`${placeholder}:`} </div>
    {/if}
    <input  bind:this={ref_input} 
            style={`max-width : ${max_chars * 15}px`} 
            maxlength="{max_chars}" 
            type="text"  
            value="{value}" 
            on:change={(event) => {on_change(event.target.value)}}
            on:focusin =    {() => {is_focused = true} }
            on:focusout = {() => { is_focused = false}}
            placeholder = {label}
    >
</main>



<script>
    export let placeholder = "";
    export let label = "";
    export let max_chars = 20;
    export let value = "";
    export let ref_input;
    let is_focused = false;

    export let on_change_callback = (value) => {};

    function on_change(val) {
        if (val == "") { ref_input.value = value; }
        on_change_callback(val);
    }
</script>



<style lang="scss">
    .input {
        display: flex;
        gap: 10px;
        align-items: center;
        width: fit-content;
        padding: 5px;
        border-radius: 2px;

    }

    .input input , .input div {
        font-size: 20px;
        outline: none;
        border: none;
        margin: 0;
        text-align: center;
        color: rgb(70, 70, 70);
    }

    .input div {
        font-size: 20px;
        font-weight: bold;
        width: fit-content;
    }
    .input-field {
        color: rgb(70, 70, 70);
    }
    .input_field:hover {
        outline: 3px solid rgb(150, 150, 150);
    }

    .input-field-focued {
        outline: 3px solid rgb(22, 130, 254) ;
        color: rgb(22, 130, 254) ;
    }
    .input-field-focued input {
        color: rgb(22, 130, 254) ;
    }

</style>