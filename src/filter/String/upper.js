Vue.filter('upper', function (value) {

    if (!value) return '';

    value = value.toString();

    return value.toUpperCase();

})