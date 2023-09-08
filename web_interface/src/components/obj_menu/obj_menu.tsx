import styles from "./obj_menu.module.css"
import g_styles from "../../app.module.css"
import ObjsMenu from "./obj_selector_element"



export default function ObjMenu() {
    return (
      <div id={styles.obj_menu} class={g_styles.menu}>
        <ObjsMenu />
        <h1>Obj Menu</h1>
      </div>
    )
  }
  