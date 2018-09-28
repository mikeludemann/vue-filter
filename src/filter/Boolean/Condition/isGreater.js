Vue.filter('isGreater', function (value, validator) {

    function isGreater(value, validator) {

        return value > validator;

    }

    return isGreater(value, validator);

})