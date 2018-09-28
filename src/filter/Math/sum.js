Vue.filter('sum', function (value, defaultValue) {

    var convert = (typeof defaultValue === "string") ? Number(defaultValue) : defaultValue;

    return (typeof Array.isArray(value) === false) ? value : value.reduce(function (previous, current) {

        return previous + current;

    }, convert || 0);

})