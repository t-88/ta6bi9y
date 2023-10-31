<div style={style}> 
</div>

<script>
    export let rect_props;

    let sizing = {x : 0, y : 0, w : 0 , h : 0};
    rect_props.position.x.subscribe((value) => {sizing.x = value});
    rect_props.position.y.subscribe((value) => {sizing.y = value});
    rect_props.size.x.subscribe((value) => {sizing.w = value});
    rect_props.size.y.subscribe((value) => {sizing.h = value});

    let fill_color  = rect_props.fill_color._color;
    rect_props.fill_color.color.subscribe((value) => {fill_color = value});


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