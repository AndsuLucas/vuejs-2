new Vue({
    el: "#desafio",
    data: {
        valor: 0,
    },
    computed: {
        resultado() {
            return this.valor !== 37 ? "Diferente" : "igual";
        }
    },
    watch: {
        resultado() {   
            console.log('aconteceu algo');
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        }
    }

});

