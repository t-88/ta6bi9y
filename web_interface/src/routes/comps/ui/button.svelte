<button style={style} on:click={on_click} class={$$props.class} >
    {title}
</button>


<script>
    export let title = "";
    export let style = "";

    export let on_click = () => {}
</script>


<style>
    button {
        padding: 5px;
        text-align: center;
        font-weight: bold;
        font-size: 22px;
        border-radius: 5px;
        cursor: pointer;

        border: 4px solid black;
        background-color: white;
        color: black;

        outline: none;
    }

    button:hover {
        color: white ;
        border: 4px solid black ;
        background-color: black;
    }
    button:active {
        border: 4px solid black;
        background-color: white;
        color: black;
    }

</style>