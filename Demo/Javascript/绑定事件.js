function addEvent(elem, type, handle) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if(elem.attachEvent) {
        elem.attachEvent('on' + type, function () {
            handle.call(elem);
        })
    }else{
        elem['on' + type] = handle;
    }
}