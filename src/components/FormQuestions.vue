<template>
  <section class="section">
    <div class="section__content">
      <header>
        <h3 class="heading-3">Остались вопросы? Перезвоним в течение 5 минут</h3>
        <div class="hashtags">
          <span class="hashtag">#быстраяпомощь</span>
          <span class="hashtag">#сервис</span>
          <span class="hashtag">#качество</span>
        </div>
      </header>
      <Form class="form--questions">
        <template v-slot:form-btn>
          <Button class="btn btn--red no-padding">Заказать звонок</Button>
        </template>
        <template v-slot:agreement>
          <Checkbox />
        </template>
        <template v-slot:form-confirmed>
          <div class="form__submitted-icon form__submitted-icon--left"></div>
        </template>

        <template v-slot:form-submitted-message>
          <h4
            class="heading-4 "
          >Спасибо за обращение! Менеджеры свяжутся с Вами в течение 5 минут</h4>
        </template>
      </Form>
    </div>
  </section>
</template>

<script>
import Form from "~/components/Form.vue";
import Checkbox from "~/components/Checkbox.vue";

export default {
  components: {
    Form,
    Checkbox
  },
  computed: {
    submitted() {
      return this.$store.getters.submitted;
    }
  }
};
</script>
