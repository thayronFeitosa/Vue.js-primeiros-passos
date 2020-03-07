new Vue({
    el: '#desafio',
    data: {
        nome: 'thayron',
        idade: 23,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        random() {
            return Math.random()
        }
    }
})