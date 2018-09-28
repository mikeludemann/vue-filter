Vue.filter('hyperbolicTangant', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.tanh(convert);

})