app.component("product-display", {
	props: {
		premium: {
			// validations
			type: Boolean,
			required: true,
		}
	},
	template:
		/*html*/
		`<div class="product-display">
				<div class="product-container">
					<div class="product-image">
						<img v-bind:src="image" alt="" :class="[ !inStock ? 'out-of-stock-img' : '']" />
					</div>
					<div class="product-info">
						<h1>
							{{ title }}</span>
						</h1>

						<h2>Price: <span :class="{ oldPrice: onSale }">$ {{ price }} </span> <span v-show="onSale" class="on-sale">$ {{ salePrice }} <i class="bi bi-lightning-fill"></i>On Sale</span></h2>

						<div v-for="size in sizes" class="available-sizes">
							{{ size }} &nbsp;&nbsp;
						</div>

            <p v-if="inStock"><i class="bi bi-check"></i> In Stock</p>
						<p v-else><i class="bi bi-x"></i> Out of Stock</p>
	
						<p>Shipping Fee: <strong>{{ shipping }}</strong></p>
						<ul>
							<li v-for="detail in details">{{ detail }} &nbsp;&nbsp;</li>
						</ul>

						<div
							v-for="(variant, index) in variants"
							v-bind:key="variant.id"
							@mouseover="updateVariant(index)"
							v-bind:class="variant.color"
							class="color-circle"
							v-bind:style="{ backgroundColor: variant.color }"
						></div>

						<p class="description">{{ description }}</p>

						<button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }" class="button">Add to Cart</button>
					</div>
				</div>
			</div>
			<div class="review-div">
				<review-list :reviews="reviews"></review-list>
				<review-form @review-submitted="addReview"></review-form>
			</div>`,
	data() {
		return {
			product: "Socks",
			brand: "Vue",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			price: 5.99,
			salePrice: 4.99,
			selectedVariant: 0,
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
			reviews: [],
			onSale: true,
		};
	},
	// methods or functions
	methods: {
		addToCart() {
			this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
		},
		updateVariant(index) {
			this.selectedVariant = index
		},
		addReview(review) {
			this.reviews.push(review)
		}
	},
	// computed properties
	computed: {
		title() {
			return `${this.brand} ${this.product}`
		},
		image() {
			return this.variants[this.selectedVariant].image
		},
		inStock() {
			return this.variants[this.selectedVariant].quantity
		},
		shipping(){
			if(this.premium){
				return 'Free'
			}
			return `$ `+ 2.99
		}
	},
});
