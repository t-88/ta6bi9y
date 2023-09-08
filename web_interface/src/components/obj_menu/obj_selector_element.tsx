import styles from "./obj_menu.module.css"

import ObjRectangle from "./objs/obj_rectangle"

export default function ObjsMenu() {
    return (
      <div class={styles.objs_menu}>
        <ObjRectangle />
      </div>
    )
  }
  