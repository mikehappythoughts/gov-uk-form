<template>
  <form-gender-type :errorText="errorText">
    <template v-slot:title>{{ title }}</template>
    <template v-slot:radioinputs>
      <g-radio-button
        v-for="{ radioName, id } in formContent"
        :key="radioName"
        :radioName="radioName"
        :id="id"
        v-model="userInput"
      ></g-radio-button>
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
  </form-gender-type>
</template>

<script>
import FormGenderType from "@/components/app/Form/FormGenderType.vue";
import GRadioButton from "@/components/shared/Field/GRadioButton.vue";
import GButton from "@/components/shared/button/GButton.vue";
import { formLogic } from "@/mixins/FormLogic.js";

export default {
  name: "Form2",
  components: {
    FormGenderType,
    GRadioButton,
    GButton
  },
  data: () => {
    return {
      title: "",
      errorText: "",
      userInput: "",
      formId: 2,
      formContent: [],
      nextViewName: "Summary"
    };
  },
  mixins: [formLogic],
  methods: {
    showError() {
      this.errorText = "Select Male or Female";
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
