Vue.filter('isDate', function (value) {

    if (value instanceof Date === true) {

        return true;

    } else if (Object.prototype.toString.call(value) === '[object Date]') {

        return true;

    } else {

        return false;

    }

})