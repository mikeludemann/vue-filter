Vue.filter('hyperbolicCosine', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.cosh(convert);

})