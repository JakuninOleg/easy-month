<template>
  <nav class="nav">
    <a href="https://zdeslegko.ru" aria-label="Логотип Здесь Легко">
      <Logo class="nav__logo"/>
    </a>
    <Button
      class="nav__btn btn btn--yellow justify-right align-center"
      @click.native="toggleModal()" aria-label="Заказать звонок"
    >Заказать обратный звонок</Button>
    <Button
      class="nav__btn-svg btn btn--yellow btn--phone justify-right "
      @click.native="toggleModal()" aria-label="Заказать звонок"
    ><Phone /></Button>
    <a class="nav__phone telephone" href="tel:+74951203120">8 800 222 01 22</a>
  </nav>
</template>

<script>
import Button from "~/components/Button.vue";
import Logo from "@/assets/icons/logo.svg";
import Phone from "@/assets/icons/phone.svg";

export default {
  components: {
    Button,
    Logo,
    Phone
  },
  methods: {
    toggleModal() {
      this.$emit("toggleModal");
    }
  }
};
</script>
