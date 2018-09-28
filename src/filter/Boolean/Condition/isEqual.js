Vue.filter('isEqual', function (value, validator) {

    function isEqual(value, validator) {

        return value == validator;

    }

    return isEqual(value, validator);

})