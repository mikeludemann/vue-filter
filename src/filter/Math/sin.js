Vue.filter('sin', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.sin(convert * Math.PI / 180);

})