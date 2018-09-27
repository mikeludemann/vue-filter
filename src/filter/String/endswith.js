Vue.filter('endswith', function (value, setCaseSensitive, end) {

    var sensitive = setCaseSensitive || false,
        getPosition;

    if (typeof value !== "string" ||  typeof end === "undefined") {

        return value;

    }

    value = (sensitive) ? value : value.toLowerCase();
    getPosition = value.length - end.length;

    return value.indexOf((sensitive) ? end : end.toLowerCase(), getPosition) !== -1;

})