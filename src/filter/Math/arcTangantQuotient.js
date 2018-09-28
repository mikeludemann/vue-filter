Vue.filter('arctangantquotient', function (value, quotient) {

    var convertFirst = (typeof value === "string") ? Number(value) : value;
    var convertSecond = (typeof quotient === "string") ? Number(quotient) : quotient;

    return Math.atan2(convertFirst, convertSecond);

})