Vue.filter('euler', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.exp(convert);

})