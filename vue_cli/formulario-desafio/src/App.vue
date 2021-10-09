<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!submitedForm">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="Nome e Sobrenome">
					<input type="text" v-model.trim="user.fullName">
				</Rotulo>
				<Rotulo nome="Email">
					<input type="email" v-model.trim="user.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="user.password">
				</Rotulo>
				<Rotulo nome="Armazenar Dados">
					Sim<input type="radio" name="store" value="1" v-model="storeData">
					Não<input type="radio" name="store" value="0" v-model="storeData">
				</Rotulo>
				<button @click="sendForm">Submeter</button>
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Nome e Sobrenome">
					<input type="text" :value="user.fullName" readonly>
				</Rotulo>
				<Rotulo nome="Email">
					<input type="email" :value="user.email" readonly>
				</Rotulo>
				<Rotulo nome="Nome e Sobrenome">
					<input type="password" :value="user.password" readonly>
				</Rotulo>
				<Rotulo nome="Armazenar dados">
					<input type="text" :value="storeData ? 'Sim' : 'Não'" readonly>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'

export default {
	name: 'app',
	components: { Rotulo },
	data() {
		return {
			user: {
				fullName: '',
				email: '',
				password: ''
			},
			storeData: 0,
			submitedForm: false
		}
	},
	methods: {
		sendForm(e) {
			e.preventDefault();
			this.submitedForm = true;
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
