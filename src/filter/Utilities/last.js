Vue.filter('last', function (input) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function getFirstElementMatch(array, index, query) {

        var count = 0;

        return array.filter(function (element) {

            var different = (typeof query !== undefined) ? (count < index && query(element)) : count < index;

            count = different ? count + 1 : count;

            return different;

        });

    }

    function isNumber(value) {

        return (typeof value === "number" && value !== null);

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    if (!String.prototype.contains) {

        String.prototype.contains = function () {

            return String.prototype.indexOf.apply(this, arguments) !== -1;

        };

    }

    var index,
        getter,
        args,
        reverse = input;

    reverse = isObject(reverse) ? convertToArray(reverse) : reverse;

    if (!Array.isArray(reverse)) {

        return reverse;

    }

    args = Array.prototype.slice.call(arguments, 1);
    index = (isNumber(args[0])) ? args[0] : 1;
    getter = (!isNumber(args[0])) ? args[0] : (!isNumber(args[1])) ? args[1] : undefined;

    return (args.length) ? getFirstElementMatch(reverse.reverse(), index, (getter) ? String(getter) : getter).reverse() : reverse[reverse.length - 1];

})