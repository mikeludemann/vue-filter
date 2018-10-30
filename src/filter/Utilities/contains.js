Vue.filter('contains', function (input, query) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    function isString(value) {

        return (typeof value === "string" && value !== null);

    }

    function isFunction(callback) {

        return callback && {}.toString.call(callback) === '[object Function]';

    }

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || typeof query === undefined) {

        return false;

    }

    return input.some(function (element) {

        return ((isString(query) && isObject(element)) || isFunction(query)) ? String(element) : element === query;

    });

})