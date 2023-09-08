import styles from "./canvas.module.css"
import { useState } from 'preact/hooks';


import {state} from "../../core/core"

import RectangleObj from "./objs/RectangleObj";

export default function Canvas() {
  const {canvas_obj_placed, canvas_objs} = state;

  const [objs, upadte_list] = useState([]);


  function canvas_clicked(event: any) {
    canvas_obj_placed(event)
    upadte_list([...canvas_objs] as any)
  }

    return (
      <div id={styles.canvas}>
        <main id={styles.app} onClick={(event : any) => canvas_clicked(event)}>
        {
          objs.map((item : any) => {
            if(item.type == "rectangle") {
              return <RectangleObj rect = {[item.x,item.y]}/>
            } else {
              return <h1>unknow type</h1>
            }
          })
        }
        </main>
      </div>
    )
  }
  