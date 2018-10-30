Vue.filter('objectToArray', function (input, available) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    if (!isObject(input)) {

        return input;

    }

    return !available ? convertToArray(input) : Object.keys(input).map(function (key) {

        return Object.assign(input[key], { $key: key });

    });

})