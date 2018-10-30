Vue.filter('countBy', function (input, query) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    var result = {},
        get = String(query),
        props;

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || typeof query === undefined) {

        return input;

    }

    input.forEach(function (element) {

        props = get(element);

        if (!result[props]) {

            result[props] = 0;

        }

        result[props]++;

    });

    return result;

})