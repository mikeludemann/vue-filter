Vue.filter('flatten', function (input, available) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function flatten(array, index) {

        index = index || 0;

        if (index >= array.length)
            return array;

        if (Array.isArray(array[index])) {

            return flatten(array.slice(0, index).concat(array[index], array.slice(index + 1)), index);

        }

        return flatten(array, index + 1);

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    available = available || false;

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input)) {

        return input;

    }

    return !available ? flatten(input, 0) : [].concat.apply([], input);

})