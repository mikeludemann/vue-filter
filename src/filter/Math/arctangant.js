Vue.filter('arctangant', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.atan(convert);

})