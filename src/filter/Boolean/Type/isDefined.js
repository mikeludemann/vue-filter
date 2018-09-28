Vue.filter('isDefined', function (value) {

    if(typeof value !== "undefined") {

        return true;

    } else {

        return false;

    }

})