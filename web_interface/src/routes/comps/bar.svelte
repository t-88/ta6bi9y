<main class="bordered title_shadow" >
    <h1>{title}</h1>

    {#if menu_bar}
    <div class="menu-drop-down">
        <div></div>
        <div></div>
        <div></div>
    </div>
    {/if}    
</main>



<script>
    export let title;
    export let menu_bar = true;
</script>


<style lang="scss">
    main {
        background-color: var(--grey);
        width: 100%;
        height: 80px;

        border-left: 0;
        border-top: 0;
        border-right: 0;

        padding: 20px 30px;
        box-sizing: border-box;
        font-size: 15px;
    }
    h1 {
        margin: 0;
        font-family: "inter";
        display: inline;
    }

    .menu-drop-down {
        display: flex;
        float: right;
        flex-direction: column;
        gap: 4px;

        cursor: pointer;
    }

    .menu-drop-down div {
        width:  8px;
        height: 8px;
        background: black;

    }

</style>
