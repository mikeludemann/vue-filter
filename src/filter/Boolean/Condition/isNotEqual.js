Vue.filter('isNotEqual', function (value, validator) {

    function isNotEqual(value, validator) {

        return value != validator;

    }

    return isNotEqual(value, validator);

})