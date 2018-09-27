Vue.filter('lower', function (value) {

    if (!value) return '';

    value = value.toString();

    return value.toLowerCase();

})