Vue.filter('searchfield', function (input) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    var getter,
        field;

    input = isObject(input) ? convertToArray(input) : input;

    var args = Array.prototype.slice.call(arguments, 1);

    if (!Array.isArray(input) || !args.length) {

        return input;

    }

    return input.map(function (position) {

        field = args.map(function (field) {

            getter = String(field);

            return getter(position);

        }).join(' ');

        return Object.assign(position, { searchfield: field });

    });


})