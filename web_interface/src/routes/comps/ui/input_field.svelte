<main class="input_field">
    <span>{placeholder} </span>
    <input  maxlength="{max_chars}" type="text"  value="{value}" on:change={(event) => {on_change(event.target.value)}}>
</main>




<script>
    export let placeholder = "";
    export let max_chars = 20;
    export let value;



    export let on_change = (value) => {}; 
</script>



<style lang="scss">
    .input_field {
        width: fit-content;
        border-bottom: 1px black solid ;
    }
    input {
        width:  33px;
        height: 30px;
        padding: 5px;

        font-size: 20px;

        border: none;
        outline: none;

        margin: 0;
        text-align: center;
    }

    span {
        font-size: 20px;
        font-weight: bold;
        color: rgb(78, 78, 78);
    }

</style>