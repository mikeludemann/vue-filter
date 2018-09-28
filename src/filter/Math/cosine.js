Vue.filter('cosine', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.cos(convert * Math.PI / 180);

})