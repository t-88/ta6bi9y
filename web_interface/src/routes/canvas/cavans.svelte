
<main >
    <div id="canvas" style={`width: ${width}px; height: ${height}px;`} class="bordered"> 
        <div id="phone-bar-top" style={`height: ${phone_top_height}px`} class="phone-bar bordered"></div>
        <div id="canvas-body"></div>
        <div id="phone-bar-bottom" style={`height: ${phone_bottom_height}px`} class="phone-bar bordered"></div>
    </div>
     

</main>

<script>
    import "../global.css"
    import { getContext } from "svelte";



    const  width =  getContext("canvas_width");
    const  height = getContext("canvas_height");
    const phone_top_height = getContext("phone_top_height");
    const phone_bottom_height = getContext("phone_bottom_height");


    console.assert(width != undefined,"cavnas_width not set in context state");
    console.assert(height != undefined,"cavnas_height not set in context state");
    console.assert(phone_top_height != undefined,"phone_top_height not set in context state");
    console.assert(phone_bottom_height != undefined,"phone_bottom_height not set in context state");
</script>


<style lang="scss">
    main {
        flex: 2;

        display: flex;
    
        overflow: hidden;
    }    
    #canvas {
        margin: auto;

        display: flex;

        flex-direction: column;
        border-radius: 5px;
    }

    .phone-bar { 
        width: 100%;
        background-color: var(--grey);
    }
    #canvas-body {
        height: 100%;
    }

    #phone-bar-top {
        align-self: start;
        border-top: 0;
        border-left: 0;
    }
    #phone-bar-bottom {
        align-self: end;
        border-bottom: 0;
        border-right: 0;
    }

</style>