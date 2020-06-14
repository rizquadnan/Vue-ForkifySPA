import Likes from "./../../models/Likes.js";
import { eventBus } from "./../../main.js";
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export const cLikeRecipe = {
  computed: {
    ...mapGetters([
      'stateLikes',
      'stateRecipe'
    ])
  },
  methods: {
    ...mapMutations([
      'toggleStateRecipeLiked',
      'createLikes'
    ]),
    ctrlLikeRecipe() {
      // toggle like button appearance
      this.isLiked = !this.isLiked;
      // change liked status in state
      this.toggleStateRecipeLiked(true);

      // add event to add recipe to likes
      if (this.isLiked === true) {
        if (
          Object.keys(this.stateLikes).length === 0 &&
          this.stateLikes.constructor === Object
        ) {
          this.createLikes(new Likes());
        }
        eventBus.$emit("recipeLiked");
      } else {
        // delete current recipe from likes
        eventBus.$emit("recipeDisliked");
      }
    },
    checkIsLiked() {
      if (this.stateLikes.likeList) {
        const idx = this.stateLikes.likeList.findIndex(
          el => el.id === this.stateRecipe.id
        );
        if (idx !== -1) {
          this.isLiked = true;
        }
      }
    }
  }
};
