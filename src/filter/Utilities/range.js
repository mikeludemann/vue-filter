Vue.filter('range', function (input, total, start, increment, callback) {

    function isFunction(callback) {

        return callback && {}.toString.call(callback) === '[object Function]';

    }

    start = start || 0;

    increment = increment || 1;

    for (var i = 0; i < parseInt(total); i++) {

        var j = start + i * increment;

        input.push(isFunction(callback) ? callback(j) : j);

    }

    return input;

})