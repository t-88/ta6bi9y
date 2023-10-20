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
        background-color: transparent;
        border: none;
        outline:  4px black solid;
    }
</style>