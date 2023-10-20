<div style={style}>
</div>

<script>
    export let x , y , w ,h;
     
    $: style = `
        left:   ${x}px;
        top:   ${y}px;
        width:  ${w}px;
        height: ${h}px;
    `; 


</script>


<style>
    div {
        position: absolute;
        background-color: black;
        border: none;
        outline:  2px black solid;
    }
</style>