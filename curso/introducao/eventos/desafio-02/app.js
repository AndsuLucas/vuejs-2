new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert('Hello world!');
        },
        getValue(event){
            this.valor = event.target.value;
        }
    }

});