<template>
  <div class="loader recipe">
    <svg viewBox="0 0 20 20">
      <path
        d="M19.315 10h-2.372v-0.205c-0.108-4.434-3.724-7.996-8.169-7.996-4.515 0-8.174 3.672-8.174 8.201s3.659 8.199 8.174 8.199c1.898 0 3.645-0.65 5.033-1.738l-1.406-1.504c-1.016 0.748-2.27 1.193-3.627 1.193-3.386 0-6.131-2.754-6.131-6.15s2.745-6.15 6.131-6.15c3.317 0 6.018 2.643 6.125 5.945v0.205h-2.672l3.494 3.894 3.594-3.894z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  computed: {

  },
  props: {
    type: String
  }
};
</script>

<style scoped>
.loader {
  margin: 5rem auto;
  text-align: center;
}

.loader svg {
  fill: #f59a83;
  transform-origin: 44% 50%;
  animation: rotate 1.5s infinite linear;
}

.search {
  height: 5.5rem;
  width: 5.5rem;
}

.recipe {
  margin-top: 20rem;
  height: 3rem;
  width: 3rem;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
