function getStyle(elem, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[attr];
    } else {
        return elem.currentStyle[attr];
    }
}