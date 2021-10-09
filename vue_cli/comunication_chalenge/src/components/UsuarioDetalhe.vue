<template>
    <div class="usuario-detalhe">
        <h2 v-if="!user">Usuário não selecionado!</h2>
        <div v-else>
            <h2>ID: {{ user.id }}</h2>
            <h2>Nome: {{ user.nome }}</h2>
            <h2>Idade: {{ user.idade }}</h2>
            <hr>
            <form action="#">
                <input type="text" v-model="user.nome">
                <input type="text" v-model="user.idade">
                <br>
                <br>
                <button @click="changeUserFn(user, user.index)">Change Data</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        user: {
            type: Object
        },
        changeUserFn: {
            type: Function,
            required: true
        }
    },
}
</script>

<style>
    .usuario-detalhe {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
