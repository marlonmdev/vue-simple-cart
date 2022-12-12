const { createApp } = Vue;

const app = createApp({
	data() {
		return {
			cart: [],
			premium: true,
		};
	},
	methods: {
		updateCart(id) {
			this.cart.push(id)
		},
		clearCart(id){
			this.cart.pop(id)
		}
	},
});
