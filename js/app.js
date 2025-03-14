//menú hamburguesa

const app = Vue.createApp({
    data() {
        return {
            menu_abierto: false
        };
    },
    methods: {
        toggleMenu() {
            this.menu_abierto = !this.menu_abierto;
        },
    }
});

app.mount('#app');


