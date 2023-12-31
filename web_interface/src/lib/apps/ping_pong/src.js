

// function create_hitable(x,y) {
//     return {
//         type : "rect",
//         pos : [x,y],
//         size : [40,40],
//         color : "#FF00FF",
//         functions : {
//             start : "",
//             update: `
//                 let ball_rect = _.find_widget("ball");
//                 if(ball_rect) {
//                     if(ball_rect.AABB(cur)) {
//                         cur.deleted.set(true);
//                         cur._w = 0;
//                         cur._h = 0;
//                         ball_rect.user_data["dir_y"] *= -1;
//                         ball_rect.user_data["dir_x"] *= -1;
//                     }
//                 }
//             `
//         }
//     }
// }


// app = {
//     functions : {
//         start: `
//                 for(let y = 0; y < 5; y++) {
//                     for(let x = 0; x < 10; x++) {
//                         create_hitable(x,y); 
//                     }
//                 }
//             `
//     },
//     children : {
//         player : {
//             type : "rect",
//             pos : [100,100],
//             size : [20,80],
//             color : "#FF00FF",
//             functions : {
//                 on_event : `
//                     if(_.cur_key_down == "ArrowRight" &&  cur.props.position._x + cur.props.size._x < _.width) {
//                        cur.props.position._x += 3;
//                     }
//                     if(_.cur_key_down == "ArrowLeft" && cur.props.position._x > 0) {
//                        cur.props.position._x -= 3;
//                     }
//                 `
//             }
//         },
//         ball : {
//             functions : {
//                 start : `
//                    
//                 `,
//                 update : `
//                     
//                 `
//             },
//         }
//     }

// }




let app = 
{
    functions: {
        start : `
            for(let y = 0; y < 5; y++) {
                for(let x = 0; x < 10; x++) {
                    _.create_widget(
                        "rect",
                        {
                            type : "rect",
                            id : "wall",
                            pos : [x * 45 + 25,y * 45 + 5],
                            size : [40,40],
                            color : "#FF00FF",
                            functions : {
                                start : "",
                                update: \`\`
                            }
                        }
                    );
                }
            }
        `,
        update: `
            let walls = _.find_widget_by_class("wall");
            let ball_rect = _.find_widget("ball");
            for(let i = 0; i < walls.length; i++) {
                if(ball_rect.AABB(walls[i]) && !get(walls[i].deleted)) {
                    walls[i].deleted.set(true);
                    walls[i]._w = 0;
                    walls[i]._h = 0;
                    ball_rect.user_data["dir_y"] *= -1;
                    ball_rect.user_data["dir_x"] *= -1;
                    break;
                }
            }
        `,
    },
    children : [
        {
            id : "player",
            type : "rect",
            pos : [100,700],
            size : [80,20],
            color : "#FF00FF",
            functions : {
                update : `
                    if(_.cur_key_down == "ArrowRight" &&  cur.props.position._x + cur.props.size._x < _.width) {
                       cur.props.position._x += 3;
                    }
                    if(_.cur_key_down == "ArrowLeft" && cur.props.position._x > 0) {
                       cur.props.position._x -= 3;
                    }
                `
            }    
        },
        {
            id : "ball",
            type : "rect",
            pos : [200,500],
            size : [30,30],
            color : "#FF00FF",
            functions: {
                start : `
                    cur.user_data["speed"] = 5;
                    cur.user_data["dir_x"] = Math.random() * 2 - 1;
                    cur.user_data["dir_y"] = Math.random() * 2 - 1;
                    let mag = Math.sqrt(cur.user_data["dir_x"] * cur.user_data["dir_x"] + cur.user_data["dir_y"] * cur.user_data["dir_y"]);
                    cur.user_data["dir_x"] /= mag;
                    cur.user_data["dir_y"] /= mag;
                `,
                update : `
                    cur.props.position._x += cur.user_data["dir_x"] * cur.user_data["speed"]; 
                    cur.props.position._y += cur.user_data["dir_y"] * cur.user_data["speed"]; 
                    if(cur.props.position._y + cur.props.size._y > _.height - 100) {
                        cur.props.position._y = _.height - cur.props.size._y - 100;
                        cur.user_data["dir_y"] *= -1;
                    }
                    if(cur.props.position._y < 0) { 
                        cur.props.position._y = 0;
                        cur.user_data["dir_y"] *= -1;
                    }
                    if(cur.props.position._x + cur.props.size._x > _.width) {
                        cur.props.position._x = _.width - cur.props.size._x;
                        cur.user_data["dir_x"] *= -1;
                    }
                    if(cur.props.position._x < 0) {
                        cur.props.position._x = 0;
                        cur.user_data["dir_x"] *= -1;
                    }
                    let player_rect = _.find_widget("player");
                    if(player_rect) {
                        if(player_rect.AABB(cur)) {
                            cur.user_data["dir_y"] *= -1;
                        }
                    }
                `,
            }



           

        }
    ],
};

export default {app} ;