<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <input type="text" v-model="name">
        <br>
        <p>Age:<strong> {{ age }}</strong></p>
        <br>
        <button @click="changeName">Change Name</button>
        <div class="componentes">
        <hr>
            <app-usuario-info :name="name" @nameChange='name = $event' :age="age" />
            <app-usuario-editar :age="age" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },

    data() {
        return {
            name: 'myName',
            age: 22
        }
    },

    methods: {
        changeName() {
            this.name += '+';
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
