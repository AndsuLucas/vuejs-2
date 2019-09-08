<template>
    <div>
        <p>Estado do servidor: {{estado}}</p>
        <button @click="desligar">Desligar</button>
        <button @click="ligar">Ligar</button>
    </div>
</template>
<script>    
    export default {
        name: 'EstadoServidor', 
        data: () => {
            return{
                estado: "Desligado"
            }
        },
        methods:{
            ligar(){
                this.estado = "Ligado"
            },
            desligar(){
                this.estado = "Desligado"
            }
        }
    }
</script>