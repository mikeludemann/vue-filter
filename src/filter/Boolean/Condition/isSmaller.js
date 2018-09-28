Vue.filter('isSmaller', function (value, validator) {

    function isSmaller(value, validator) {

        return value < validator;

    }

    return isSmaller(value, validator);

})