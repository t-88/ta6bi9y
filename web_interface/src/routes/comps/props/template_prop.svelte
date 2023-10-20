<main>
    <h1 id="title">{title}</h1>
    <div>
        <slot />
    </div>
</main>
<hr>

<script>
    export let title;
</script>


<style lang="scss">
    main {
        padding: 0px 10px; 
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    h1 {
        margin: 0;
        padding: 0;
    }
    #title {
        font-weight: bold;
    }

    div {
        padding: 0 30px;
    }
</style>