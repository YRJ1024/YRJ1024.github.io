//window.pageXOffset在IE8以及IE8以下不兼容
//document.body.scrollLeft有值的话，那么doumentElement.scrollLeft必定为0，两者相加即可
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x : window.pageXOffset,
            y : window.pageYOffset,
        }
    } else {
        return {
            x : document.body.scrollLeft + document.documentElement.scrollLeft,
            y : document.body.scrollTop + document.documentElement.scrollTop,
        }
    }
}