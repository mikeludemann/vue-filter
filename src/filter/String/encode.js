Vue.filter('encode', function (value) {

    return (typeof value === "string") ? encodeURI(value) : value;

})