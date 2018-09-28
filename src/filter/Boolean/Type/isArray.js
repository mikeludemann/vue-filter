Vue.filter('isArray', function (value) {

    if (Array.isArray(value) === true) {

        return true;

    } else {

        return false;

    }

})