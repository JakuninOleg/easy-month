<template>
  <form class="form" @submit.prevent="submit" v-if="!submitted">
    <slot name="form-header" />
    <slot name="form-name" />
    <label class="label">
      <InputPhone />Телефон
    </label>
    <slot name="form-btn" />
    <slot name="agreement" />
  </form>
  <form class="form form--flex" @submit.prevent="submit" v-else>
    <slot name="form-confirmed" />
    <slot name="form-submitted-message" />
    <slot name="form-submitted-btn" />
  </form>
</template>

<script>
import axios from "axios";

import Button from "~/components/Button.vue";
import InputPhone from "~/components/InputPhone.vue";

export default {
  components: {
    Button,
    InputPhone
  },
  data: () => {
    return {
      checked: true,
      submitted: false
    };
  },
  computed: {
    name() {
      return this.$store.getters.name;
    },
    phone() {
      return this.$store.getters.phone;
    }
  },
  methods: {
    submit() {
      this.$store.dispatch("submitForm");
      this.submitted = true;
      axios.post("https://landing-api.zdeslegko.ru/api/v1/requests/", {
        request: { name: this.name, phone: this.phone, source: "easy-month" }
      });
    }
  }
};
</script>
