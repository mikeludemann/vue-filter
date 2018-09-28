Vue.filter('round', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.round(convert);

})