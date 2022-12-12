app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `<div class="review-container">
    <h3 class="text-center">Reviews</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        <strong class="text-danger">{{ review.name }}</strong> gave this <strong class="text-warning">{{ review.rating }} stars</strong>
        <br />
        <em>"{{ review.review }}"</em>
      </li> 
    </ul>
  </div>`,
})