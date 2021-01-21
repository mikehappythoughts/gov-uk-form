<template>
  <form-full-name :errorText="errorText">
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:inputs>
      <g-field-text
        id="full-name"
        :class="['govuk-input', { 'govuk-input--error': errorText !== '' }]"
        aria-describedby="full-name-error"
        type="text"
        name="full-name"
        v-model="userInput"
      ></g-field-text>
    </template>
    <template v-slot:button>
      <g-button
        class="govuk-!-margin-top-5 govuk-button"
        data-module="govuk-button"
        @clicked="validateFormData"
      >
        Save and continue
      </g-button>
    </template>
  </form-full-name>
</template>

<script>
import GFieldText from "@/components/shared/Field/GFieldText.vue";
import GButton from "@/components/shared/button/GButton.vue";
import FormFullName from "@/components/app/Form/FormFullName.vue";
import { formLogic } from "@/mixins/FormLogic.js";

export default {
  name: "Form0",
  components: {
    FormFullName,
    GFieldText,
    GButton
  },
  data: () => {
    return {
      title: "",
      errorText: "",
      userInput: "",
      formId: 0,
      nextViewName: "Form1",
      formContent: []
    };
  },
  mixins: [formLogic],
  methods: {
    showError() {
      this.errorText = "Enter your full name";
    }
  }
};
</script>
<style scoped lang="scss"></style>
