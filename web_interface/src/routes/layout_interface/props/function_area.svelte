<main>
    <h2>{title}</h2>
    <textarea bind:value={binded} rows={6} on:change={on_change} ></textarea>
</main>


<script>
    export let title = "";
    export let binded = undefined;
    export let on_change = (value) => {};

</script>


<style>
    textarea {
        width: 100%;
        font-size: 20px;

    }
</style>