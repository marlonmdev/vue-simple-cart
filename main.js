const { createApp } = Vue;

const app = createApp({
	data() {
		return {
			product: "Socks",
			brand: "Vue",
			// inStock: true,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			price: 5.99,
			salePrice: 4.99,
			selectedVariant: 0,
			onSale: true,
			details: ["50% cotton", "30% wool", "20% polyester"],
			sizes: ["XS", "S", "M", "L", "XL"],
			variants: [
				{
					id: 2234,
					color: "#17b88f",
					image: "./assets/images/socks_green.jpg",
					quantity: 50,
				},
				{
					id: 2235,
					color: "#254368",
					image: "./assets/images/socks_blue.jpg",
					quantity: 0,
				},
			],
			cart: 0,
		};
	},
	// methods or functions
	methods: {
		addToCart() {
			this.cart += 1;
		},
		clearCart() {
			this.cart = 0;
		},
		updateVariant(index) {
			this.selectedVariant = index;
		},
	},
	// computed properties
	computed: {
		title() {
			return `${this.brand} ${this.product}`;
		},
		image() {
			return this.variants[this.selectedVariant].image;
		},
		inStock() {
			return this.variants[this.selectedVariant].quantity;
		},
	},
});
