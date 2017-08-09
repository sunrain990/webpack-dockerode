export default {
    install(Vue, options){
        Vue.locationHref = function (url){
            window.location.href = url;
        }
    }
}