<div style={style} > </div>


<script>
    export let x;
    export let y;

    let style = `
        left : ${x}px;
        top : ${y}px;
    `;
</script>

<style>
    div {
        width:  6px;
        height: 6px;
        position: absolute;
        background: rgba(128, 128, 128, 0.2);
        border-radius: 2px;
    }
</style>

