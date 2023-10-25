<main>
    <h2>{title}</h2>
    <textarea bind:value={binded} rows={6} ></textarea>
</main>


<script>
    export let title = "";
    export let binded = undefined;
</script>


<style>
    textarea {
        width: 100%;
        font-size: 20px;

    }
</style>