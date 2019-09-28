new Vue({
    el: "#desafio",
    data:{
        nome: "Anderson Lucas",
        idade: 19,
        imgLink: "https://miro.medium.com/max/1200/1*IZBNrGFzTkPOmnGS69_O0w.png"
    
    },

    methods: {
        multAge: function() {
            return (this.idade * 3).toString();
        },
        random: function() {
            return Math.random();
        }
        
    }
});