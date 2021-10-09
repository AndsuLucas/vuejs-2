<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        {{ numero }} {{ indice }}
        <hr>
        <citacao>
            <h1 slot="source">{{ citacoes[indice].fonte }}</h1>
            <p slot="text">{{ citacoes[indice].texto }}</p>
            <h6 slot="author">{{ citacoes[indice].autor }}</h6>
        </citacao>
    </div>
</template>

<script>
import citacao from './Citacao.vue';

export default {
    components: {
     citacao   
    },

    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            // return Math.abs(this.numero % 3)
            return Math.abs(this.numero % 3);
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
