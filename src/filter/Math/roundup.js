Vue.filter('roundup', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.ceil(convert);

})