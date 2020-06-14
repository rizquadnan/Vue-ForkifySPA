<template>
  <div class="pages">
    <button v-if="!isDefault" class="pages__left-btn" @click="prevPage">
      <svg
        class="icon-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M8 5v14l11-7z" />
      </svg>
      <span class="content-left"
        >Page <span class="number-left">{{ leftBtnPage }}</span></span
      >
    </button>
    <button v-if="!isLast" class="pages__right-btn" @click="nextPage">
      <span class="content-right"
        >Page <span class="number-right">{{ rightBtnPage }}</span></span
      >
      <svg
        class="icon-right"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  </div>
</template>

<script>
import { eventBus } from "./../../main.js";

export default {
  data() {
    return {
      isDefault: true,
      isLast: false,
      curPageOn: this.curPage,
      maxPageOn: this.maxPage
    };
  },
  props: {
    curPage: Number,
    maxPage: Number,
    resPerPage: Number,
    isOnSearch: Boolean,
    isOnShopList: Boolean
  },
  computed: {
    rightBtnPage() {
      return this.curPageOn + 1;
    },
    leftBtnPage() {
      return this.curPageOn - 1;
    }
  },
  methods: {
    alertParent(type) {
      if (type === "search"){
        eventBus.$emit("renderPage", {
          curPage: this.curPageOn,
          maxPage: this.maxPageOn
        });
      // } else {
      //   eventBus.$emit("renderPageDesktop", {
      //     curPage: this.curPageOn,
      //     maxPage: this.maxPageOn
      //   });
      }
    },
    nextPage() {
      this.isDefault = false;
      if (this.curPageOn < this.maxPageOn) {
        this.curPageOn++;
        if (this.isOnSearch === true) {
          this.alertParent("search");
        // } else {
        //   this.alertParent();
        // }
        }
      } else if (this.curPageOn === this.maxPageOn) {
        this.curPageOn++;
        this.isLast = true;
        if (this.isOnSearch === true) {
          this.alertParent("search");
        }
        // } else {
        //   this.alertParent();
        // }
      }
    },
    prevPage() {
      this.curPageOn--;
      if (this.curPageOn === 1) {
        this.isDefault = true;
      } else if (this.curPageOn === this.maxPageOn) {
        this.isLast = false;
      }
      if (this.isOnSearch === true) {
        eventBus.$emit("renderPage", {
          curPage: this.curPageOn,
          maxPage: this.maxPageOn
        });
      }
    }
  }
};
</script>

<style scoped>
.pages {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
}

.pages__left-btn,
.pages__right-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0;
  font-size: 0.7rem;
  width: 5.5rem;
  border: none;
  border-radius: 20px;
  color: #fb6759;
  fill: currentColor;
  background-color: hsl(26, 33%, 96%);
  cursor: pointer;
  transition: background-color 350ms;
}

.pages__left-btn:hover,
.pages__right-btn:hover {
  background-color: hsla(26, 33%, 86%);
}

.pages__left-btn {
  margin-left: 2.5rem;
  grid-column: 1;
  justify-self: start;
}

.pages__right-btn {
  margin-right: 2.5rem;
  grid-column: 2;
  justify-self: end;
}

.icon-left,
.icon-right {
  width: 1rem;
}

.content-left {
  margin-left: 0.4rem;
}

.content-right {
  margin-right: 0.4rem;
}

.icon-left {
  transform: rotate(180deg);
}
</style>
