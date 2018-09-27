Vue.filter('split', function (value, delimiter, index) {

    function escapeRegularExpression(input) {

        return input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

    }

    function isNull(value) {

        return value === null;

    }

    var regexp,
        matching,
        splitter,
        tmp;

    if (typeof value === "undefined" || typeof value !== "string") {

        return null;

    }

    if (typeof delimiter === "undefined") {

        delimiter = '';

    }

    if (isNaN(index) || index == "" || index == null) {

        index = 0;

    }

    regexp = new RegExp(escapeRegularExpression(delimiter), 'g');
    matching = value.match(regexp);

    if (isNull(matching) || index >= matching.length) {

        return [value];

    }

    if (index === 0) {

        return value.split(delimiter);

    }

    splitter = value.split(delimiter);
    tmp = splitter.splice(0, index + 1);
    splitter.unshift(tmp.join(delimiter));

    return splitter;


})