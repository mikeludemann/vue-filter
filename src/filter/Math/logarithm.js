Vue.filter('logarithm', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.log(convert);

})