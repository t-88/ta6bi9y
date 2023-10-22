export function AABB(rect1,rect2) {
    return rect1.x + rect1.w > rect2.x && rect1.y + rect1.h > rect2.y &&
           rect2.x + rect2.w > rect1.x && rect2.y + rect2.h > rect1.y;
}

export function AABB_exp(x,y,w,h,x1,y1,w1,h1) {
    return x + w > x1 && y + h > y1 &&
           x1 + w1 > x && y1 + h1 > y;
}