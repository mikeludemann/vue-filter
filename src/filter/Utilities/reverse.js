Vue.filter('reverse', function (input) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function isString(value) {

        return (typeof value === "string" && value !== null);

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    input = isObject(input) ? convertToArray(input) : input;

    if (isString(input)) {

        return input.split('').reverse().join('');

    }

    return Array.isArray(input) ? input.slice().reverse() : input;

})