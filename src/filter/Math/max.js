Vue.filter('max', function (value) {

    if (typeof Array.isArray(value) === false) {

        return value;

    }

    var obj = Object.values(value);

    return (typeof Array.isArray(value) === true) ? Math.max.apply(Math, value) : Math.max(...obj);

})