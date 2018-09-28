Vue.filter('isNotEqualType', function (value, validator) {

    function isNotEqualType(value, validator) {

        return value !== validator;

    }

    return isNotEqualType(value, validator);

})