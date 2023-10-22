export default  class BlockStruct {
    constructor(type,id,x = 0, y = 0 , w = 0 , h = 0) {
        this.type = type;
        this.id = id;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}