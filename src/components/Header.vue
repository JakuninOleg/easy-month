<template>
  <header class="header">
    <div class="header__inner">
      <slot />
      <div class="header__content">
        <div class="header__content-top">
          <span class="header__text--date">только до 28 декабря</span>
          <span class="header__text">для всех, кто хочет найти лучшее предложение</span>
        </div>
        <h1 class="header__heading">Легкий, очень легкий процент</h1>
        <div class="header__content-bottom">
          <h2
            class="header__heading--secondary"
          >деньги под ПТС на новогодние каникулы по минимальной ставке</h2>
          <Button @click.native="scrollToForm" class="btn header__btn btn--red">Получить</Button>
        </div>
      </div>
    </div>
    <figure class="header__image-container">
      <g-image src="~/assets/images/ball.png" alt="Елочная игрушка" class="header__image" />
    </figure>
  </header>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button
  },
  methods: {
    scrollToForm() {
      this.$parent.$refs.form.$el.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }
  }
};
</script>
