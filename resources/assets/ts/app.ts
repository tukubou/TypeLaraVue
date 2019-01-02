import './bootstrap'
import Vue from 'vue'
import ExampleComponent from './components/ExampleComponent.vue'

new Vue({
    el: '#app',
    render: h => h(ExampleComponent)
});