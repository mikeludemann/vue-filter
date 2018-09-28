Vue.filter('arcsine', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.asin(convert);

})