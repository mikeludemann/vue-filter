Vue.filter('hyperbolicArcsine', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.asinh(convert);

})