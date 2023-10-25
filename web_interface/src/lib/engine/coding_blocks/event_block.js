import CodingBlockTemplate from "./coding_block_template";



export default class EventBlock extends CodingBlockTemplate {
    constructor(id,x,y,w,h,more_props) {
        super(id,"event",x,y,w,h);
        this.props = {
            ...this.props,
            has_prev_connector : false,
            ...more_props, // to avoid creating classes for some simple
        };
    }
}

