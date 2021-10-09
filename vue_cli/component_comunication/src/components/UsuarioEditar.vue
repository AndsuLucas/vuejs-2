<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>{{ age }}</p>
        <br>
        <button @click="changeAge">ChangeAge</button>
    </div>
</template> 

<script>
import bell from '@/bell.js';

export default {
    props: {
        name: {
            type: String,
            // required: true
            default: () => {
                return 'anonymous';
            }
        },
        age: Number
    },
    methods: {
        changeAge() {
            this.age ++;
            bell.$emit('changeAge', this.age ); 
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
