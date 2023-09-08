import ObjMenu from "./components/obj_menu/obj_menu"
import Canvas from "./components/canvas/canvas"
import PropMenu from "./components/prop_menu/prop_menu"

import styles from "./app.module.css"

export function App() {
  return (
    <>
      <ObjMenu />
      <Canvas />
      <PropMenu />
    </>
  )
}
