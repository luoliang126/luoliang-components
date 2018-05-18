import component1 from './component1/component1.vue'
import component2 from './component2/component2.vue'

const componentsList = {
    install: function (Vue) {
        if (typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue
        }
        Vue.component('component1', component1);
        Vue.component('component2', component2);
    }
}
    
export default componentsList