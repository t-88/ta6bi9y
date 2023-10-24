<div style={style}>
</div>

<script>
    export let rect;


    let sizing = { x : rect._x, y : rect._y, w : rect._w, h : rect._h };
    rect.props.position.x.subscribe((value) => {sizing.x = value});
    rect.props.position.y.subscribe((value) => {sizing.y = value});
    rect.props.size.x.subscribe((value) => {sizing.w = value});
    rect.props.size.y.subscribe((value) => {sizing.h = value});

    let fill_color  = rect.props.fill_color._color;
    rect.props.fill_color.color.subscribe((value) => {fill_color = value});

    $: style = `
        left:   ${sizing.x}px;
        top:    ${sizing.y}px;
        width:  ${sizing.w}px;
        height: ${sizing.h}px;
        background-color: ${fill_color};
    `; 


</script>


<style>
    div {
        position: absolute;
    }
</style>