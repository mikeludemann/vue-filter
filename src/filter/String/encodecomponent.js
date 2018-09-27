Vue.filter('encodecomponent', function (value) {

    return (typeof value === "string") ? encodeURIComponent(value) : value;

})