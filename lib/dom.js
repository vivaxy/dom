/**
 * @since 150331 16:30
 * @author vivaxy
 */
(function (global) {

    var slice = Array.prototype.slice;

    Node.prototype.on = function (type, callback) {
        this.addEventListener(type, callback, false);
        return this;
    };

    Node.prototype.off = function (type, callback) {
        this.removeEventListener(type, callback, false);
        return this;
    };

    ['forEach'].forEach(function (method) {
        NodeList.prototype[method] = slice.call(this)[method];
    });

    global.$ = function (selector) {
        var list = document.querySelectorAll(selector);
        return list.length === 0 ? null :
            list.length === 1 ? document.querySelector(selector) :
                list;
    };

})(window);