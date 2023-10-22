export function calc_mouse_offset(event,ref_element) {
    return { x : parseInt(event.clientX - ref_element.getBoundingClientRect().x)  , y : parseInt(event.clientY - ref_element.getBoundingClientRect().y)};
}