Vue.filter('tangant', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.tan(convert);

})