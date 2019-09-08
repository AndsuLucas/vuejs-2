<template>
    <div>
        <input type="text" v-model="name">
        <p>Meu App {{name}}</p>
    </div>
</template>

<script>

    export default {
        name: 'MeuApp',
        data: function(){
            return {
                name: ""
            }
        }
    }

</script>
<style scoped>
    div{
        margin: 5px;
        display: inline-block;
    }
</style>