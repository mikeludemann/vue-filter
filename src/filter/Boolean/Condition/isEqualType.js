Vue.filter('isEqualType', function (value, validator) {

    function isEqualType(value, validator) {

        return value === validator;

    }

    return isEqualType(value, validator);

})