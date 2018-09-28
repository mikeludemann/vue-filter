Vue.filter('cubicRoot', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.cbrt(convert);

})