<main role="presentation" on:click={on_select}>
    <slot/>
    <h3>{name}</h3>
</main>
<hr>

<script>
    export let name = "";

    export let on_select = () => {
    } 

</script>

<style>
    main {
        display: flex;
        gap: 20px;
        padding: 10px;
        flex-direction: row;
        align-items: center;
        padding: 20px 20px ;

        font-size: 25px;

        cursor: pointer;
    }
    h3 {
        margin: 0;
    }

</style>