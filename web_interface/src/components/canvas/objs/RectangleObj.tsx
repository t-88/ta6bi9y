import style from "../canvas.module.css"

export default function RectangleObj({rect} : any) {
    return (
        <div class={style.rectangle_obj} style={{left: rect[0],top: rect[1]}}>
        </div>
    )
}