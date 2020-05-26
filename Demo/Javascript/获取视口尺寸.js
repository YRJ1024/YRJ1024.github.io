//window.innerWidth在IE8以及以下不兼容
//document.body.clientWidth兼容怪异模式
//document.documentElement.clientWidth兼容标准模式
//document.compatMode判断标准模式还是怪异模式
function getViewportOffset() {
    if (window.innerWidth) {
        return {
            w : window.innerWidth,
            h : window.innerHeight,
        }
    } else {
        if (document.compatMode === "BackCompat") {
            return {
                w : document.body.clientWidth,
                h : document.body.clientHeight,
            }
        } else {
            return {
                w : document.documentElement.clientWidth,
                h : document.documentElement.clientHeight,
            }
        }
    }
}