export function AABB(rect1,rect2) {
    return rect1._x + rect1._w > rect2._x && rect1._y + rect1._h > rect2._y &&
           rect2._x + rect2._w > rect1._x && rect2._y + rect2._h > rect1._y;
}