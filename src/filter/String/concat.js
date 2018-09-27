Vue.filter('concat', function (value, input) {

    if (!value) return '';

    value = value.toString();

    if (typeof input !== "string") {

        input = input.toString();

    }

    return value + input
    
})