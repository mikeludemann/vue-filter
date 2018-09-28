Vue.filter('hyperbolicArccosine', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.acosh(convert);

})