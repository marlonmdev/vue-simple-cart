app.component('review-form', {
  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h2>Leave a Review</h2>
        <label>Name:</label>
        <input id="name" v-model="name">

        <label>Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label>Rating:</label>
        <select id="rating" v-model.number="rating"> 
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <input class="button" type="submit" value="Submit">
     </form>`,
  data(){
    return {
      name: '',
      review: '',
      rating: null
    }
  },
  methods: {
    onSubmit(){
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating
      }

      this.$emit("review-submitted", productReview)

      this.name = ''
      this.review = ''
      this.rating = null
    }
  }
})