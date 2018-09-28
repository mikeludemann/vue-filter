Vue.filter('arccosine', function (value) {

    var convert = (typeof value === "string") ? Number(value) : value;

    return Math.acos(convert);

})