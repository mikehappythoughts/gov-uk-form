<template>
  <form-date-of-birth id="date-of-birth" :errorText="errorText">
    <template v-slot:title>{{ title }}</template>
    <template v-slot:dateInputs>
      <div
        class="govuk-date-input__item"
        v-for="({ labelName, id, inputWidth, type }, index) in formContent"
        :key="labelName"
      >
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" :for="id">
            {{ labelName }}
          </label>
          <g-field-text
            :class="[
              'govuk-input govuk-date-input__input',
              `govuk-input--width-${inputWidth}`,
              { 'govuk-input--error': errorText !== '' }
            ]"
            :id="id"
            :type="type"
            v-model="userResponses[index]"
            :maxlength="inputWidth"
            v-max-chars
          ></g-field-text>
        </div>
      </div>
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
  </form-date-of-birth>
</template>

<script>
import FormDateOfBirth from "@/components/app/Form/FormDateOfBirth.vue";
import GFieldText from "@/components/shared/Field/GFieldText.vue";
import GButton from "@/components/shared/button/GButton.vue";
import { formLogic } from "@/mixins/FormLogic.js";

export default {
  name: "Form1",
  components: {
    FormDateOfBirth,
    GFieldText,
    GButton
  },
  data: () => {
    return {
      title: "",
      errorText: "",
      formId: 1,
      nextViewName: "Form2",
      formContent: [],
      userResponses: ["", "", ""]
    };
  },
  mixins: [formLogic],
  computed: {
    userInput: {
      get() {
        const day = this.userResponses[0];
        const month = this.userResponses[1];
        const year = this.userResponses[2];

        let checkDateIsValid = this.isValidDate(day, month, year);

        return checkDateIsValid === true
          ? this.formatDate(day, month, year)
          : "";
      },
      set(newDateFormat) {
        return newDateFormat;
      }
    }
  },
  directives: {
    maxChars: {
      update: function(el) {
        const maxCharLength = el.maxLength;

        if (el.value.length > maxCharLength) {
          let event = new Event("input", { bubbles: true });
          el.value = el.value.slice(0, maxCharLength);
          el.dispatchEvent(event);
        }
      }
    }
  },
  methods: {
    isValidDate(d, m, y) {
      m = parseInt(m, 10) - 1;
      return m >= 0 && m < 12 && d > 0 && d <= this.daysInMonth(m, y);
    },
    daysInMonth(month, year) {
      const m = month;
      const y = year;

      switch (m) {
        case 1:
          return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
        case 8:
        case 3:
        case 5:
        case 10:
          return 30;
        default:
          return 31;
      }
    },
    formatDate(day, month, year) {
      return `${day}/${month}/${year}`;
    },
    showError() {
      this.errorText = "Enter a valid date of birth";
    }
  },
  created() {
    const {
      inputTitle,
      userInput,
      formContentData
    } = this.$store.getters.getCurrentFormData(this.formId);

    // if form already completed add the data the user entered into the field previously
    if (userInput !== "") {
      this.userResponses = userInput.split("/");
    }

    this.title = inputTitle;
    this.formContent = formContentData;
  }
};
</script>
<style scoped lang="scss"></style>
