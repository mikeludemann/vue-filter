Vue.filter('root', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.sqrt(convert);

})