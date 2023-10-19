<main>
    <h1 id="title">{title}</h1>
    <slot />
</main>
<hr>

<script>
    export let title;
</script>


<style lang="scss">
    main {
        padding: 0px 20px; 
    }
    h1 {
        margin: 0;
        padding: 0;
    }
    #title {
        font-weight: bold;
    }
</style>