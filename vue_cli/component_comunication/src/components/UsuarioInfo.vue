<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Name: <strong>{{ parsedName }}</strong></p>
        <p>Age: <strong>{{ age }}</strong></p>
        <button @click="reset">reset</button>
        <button @click="invert">invert</button>
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
            },
        },
        age: Number
    },

    data() {
        return {
            infoName: {
                name: this.name,
                reverse: false,
            }
        }
    },
    
    watch: {
        name() {
            this.infoName.name = this.name
        }
    },

    computed: {
        parsedName() {
            if (this.infoName.reverse) {
                const nameAsArr = this.name.split('');
                return nameAsArr.reverse().join('');
            }

            return this.infoName.name;
        }   
    },

    methods: {
        invert() {
            this.infoName.reverse = !this.infoName.reverse; 
       },

       reset() {
           this.$emit('nameChange', '');
       }
    },
    created() {
        const self = this;
        bell.$on('changeAge', function(value) {    
            self.age = value;
        })
    }
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
