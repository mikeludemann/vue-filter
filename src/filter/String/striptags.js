Vue.filter('striptags', function (value) {

    return (typeof value === "string") ? value.replace(/<\S[^><]*>/g, '') : value;

})