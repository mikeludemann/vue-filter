Vue.filter('isEmpty', function (value) {

    function isEmpty(value) {

        return value === "";

    }

    return isEmpty(value);

})