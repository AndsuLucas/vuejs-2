<template>
    <div>
        <input  type="text" v-model="nome" >
        <p>O valor inserido é {{nome}}</p>
        <div>
            <button @click="executar">Executar</button>
        </div>
    </div>
</template>
<script>
    
    export default {
        name: 'componente1',
        data: function(){
            return {
                nome: ""
            }
        },
        methods:{
            executar: function(){
                this.nome = ""
            }
        }
    }
</script>