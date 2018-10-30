Vue.filter('join', function (input, delimiter) {

    if (typeof input === undefined || !Array.isArray(input)) {

        return input;

    }

    if (typeof delimiter === undefined) {

        delimiter = ' ';

    }

    return input.join(delimiter);

})