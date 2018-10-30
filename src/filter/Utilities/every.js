Vue.filter('every', function (input, query) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    function isFunction(callback) {

        return callback && {}.toString.call(callback) === '[object Function]';

    }

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || typeof query === undefined) {

        return true;

    }

    return input.every(function (element) {

        return (isObject(element) || isFunction(query)) ? String(element) : element === query;

    });


})