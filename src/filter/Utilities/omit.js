Vue.filter('omit', function (input, search) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || typeof search === undefined) {

        return input;

    }

    return input.filter(function (element) {

        return !(String(element));

    });

})