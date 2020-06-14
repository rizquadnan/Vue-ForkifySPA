<template>
  <div class="directions-wrapper">
    <span class="heading">How to cook it</span>
    <span class="info">This recipe was carefully designed and tested by <span class="info__author">101 Cookbooks</span>. Please check out directions at their website. </span>
    <a :href="link" target="_blank" class="directions-btn">
      <span class="directions-btn__content">Directions</span>
      <svg class="directions-btn__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M8 5v14l11-7z" />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: String
  }
};
</script>

<style scoped>
  .directions-wrapper {
    text-align: center;
    padding: 2rem 5rem;
    background-color: #f9f5f3;
  }

  .directions-wrapper > * {
    display: block;
  }

  .heading {
    font-size: 1.5rem;
    font-weight: 600;
    color: #f59a83;
    text-transform: uppercase;
    margin-bottom: 2rem;
    text-align: center;
    transform: skewY(-3deg);
  }

  .info {
    font-size: 0.9rem;
    opacity: 0.6;
    margin-bottom: 1.3rem;
  }

  .info__author {
    font-weight: 600;
  }

  .directions-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    color: #fff;
    background-color: #fb6736;
    border: none;
    border-radius: 20px;
    width: 7.5rem;
    margin: 0 auto;
    box-shadow: 0 0.8rem 1.5rem rgba(101, 90, 86, 0.3);
    transition: transform 350ms;
    cursor: pointer;
    text-decoration: none;
  } 

  .directions-btn__icon {
    width: 1rem;
    fill: currentColor;
  }

  .directions-btn:hover {
    transform: scale(1.1);
  }

  .directions-btn__content {
    text-transform: uppercase;
    font-size: 0.8rem;
  }
</style>
