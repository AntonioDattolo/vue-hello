const { createApp } = Vue

const myConfig = {
	
	data() {
		
		return {
			message: 'Welcome to VueJS!',
			classContainer : "my-3 p-0 container d-flex justify-content-center align-items-center flex-wrap",
			classTitle : "effect my-2 col-12",
			effect : "effectInner text-center d-block",
			percorso : './img/vuejs-devlopment-main.jpg' 
		}
	},
	methods: {
		
	}
};

let app = Vue.createApp(myConfig);
app.mount('#app');
// document.getElementById("img").src= './img/vuejs-devlopment-main.jpg' 