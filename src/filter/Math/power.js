Vue.filter('power', function (value, exponent) {

    var convertFirst = (typeof value === "string") ? Number(value) : value;
    var convertSecond = (typeof exponent === "string") ? Number(exponent) : exponent;

    return Math.pow(convertFirst, convertSecond);

})