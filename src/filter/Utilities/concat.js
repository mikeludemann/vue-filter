Vue.filter('concat', function (input, join) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    if (typeof join === undefined) {

        return input;

    }

    if (Array.isArray(input)) {

        return isObject(join) ? input.concat(convertToArray(join)) : input.concat(join);

    }

    if (isObject(input)) {

        var array = convertToArray(input);

        return (isObject(join)) ? array.concat(convertToArray(join)) : array.concat(join);

    }

    return input;

})