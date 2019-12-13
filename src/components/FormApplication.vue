<template>
  <section class="section section__grey">
    <div class="section__content">
      <header>
        <h2 class="heading-3">Быстрое получение денег под ПТС</h2>
        <div class="hashtags">
          <span class="hashtag">#быстрополучить</span>
          <span class="hashtag">#моментальноденьги</span>
          <span class="hashtag">#деньвдень</span>
        </div>
      </header>
      <article>
        <div class="form-application__step">
          <span class="form-application__step-number">1</span>
          <span
            class="form-application__step-text"
          >Отправьте заявку и получите предварительное одобрение</span>
        </div>
        <Form>
          <template v-slot:form-name>
            <label class="label">
              <input
                type="text"
                class="form__name form__input"
                placeholder="Ваше имя"
                v-model="name"
                required="true"
              />Имя
            </label>
          </template>
          <template v-slot:form-btn>
            <Button class="btn btn--red form-application__button">Отправить заявку</Button>
          </template>
          <template v-slot:agreement>
            <Checkbox class="label__agreement--application" />
          </template>
          <template v-slot:form-confirmed>
            <div class="form__submitted-icon form__submitted-icon--left"></div>
          </template>

          <template v-slot:form-submitted-message>
            <h4 class="heading-4">Спасибо за обращение! Менеджеры свяжутся с Вами в течение 5 минут</h4>
          </template>
        </Form>
        <div class="form-application__step">
          <span class="form-application__step-number">2</span>
          <span
            class="form-application__step-text"
          >Оцените автомобиль. Вы можете приехать в офис или заказать услугу «выездной офис».</span>
        </div>
        <div class="form-application__step">
          <span class="form-application__step-number">3</span>
          <span class="form-application__step-text">Подпишите договор и получите деньги под низкий процент</span>
        </div>
      </article>
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
    },
    name: {
      get: function () {
        return this.$store.getters.name
      },
      set: function (value) {
        this.$store.dispatch('setName', value)
      }
    }
  }
};
</script>
