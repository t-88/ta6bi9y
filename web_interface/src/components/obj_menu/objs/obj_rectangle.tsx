import styles from "../obj_menu.module.css"

import {state} from "../../../core/core"
export default function ObjRectangle() {
    const {obj_selected} = state
    return (
        <div class={styles.obj_selector_rectangle} onClick={() => obj_selected("rectangle")}>
            <div class={styles.obj_selector_rectangle_icon_rectangle}>
            </div>
        </div>
    )
}