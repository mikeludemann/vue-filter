Vue.filter('rounddown', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.floor(convert);

})