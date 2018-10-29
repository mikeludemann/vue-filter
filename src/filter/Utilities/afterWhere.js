Vue.filter('afterWhere', function (input, query) {

    function containsObject(partial, object) {

        var keys = Object.keys(partial);

        return keys.map(function (el) {

            return (object[el] !== undefined) && (object[el] == partial[el]);

        }).indexOf(false) == -1;

    }

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || typeof query === "undefined") {

        return input;

    }

    var index = input.map(function (element) {

        return containsObject(query, element);

    }).indexOf(true);

    return input.slice((index === -1) ? 0 : index);

})