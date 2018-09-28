Vue.filter('isFunction', function (value) {

    if(typeof value === "function") {

        return true;

    } else {

        return false;

    }

})