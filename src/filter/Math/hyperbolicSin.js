Vue.filter('hyperbolicSin', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.sinh(convert);

})