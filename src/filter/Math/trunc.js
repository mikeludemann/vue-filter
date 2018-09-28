Vue.filter('trunc', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.trunc(convert);

})