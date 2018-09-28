Vue.filter('min', function (value) {

    if (typeof Array.isArray(value) === false) {

        return value;

    }

    var obj = Object.values(value);

    return (typeof Array.isArray(value) === true) ? Math.min.apply(Math, value) : Math.min(...obj);

})