<template>
  <div
    class="govuk-form-group"
    :class="{
      'govuk-form-group--error': errorText !== ''
    }"
  >
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
        <h1 class="govuk-fieldset__heading">
          <!-- title -->
          <slot name="title"></slot>
        </h1>
      </legend>
      <span
        id="changed-name-error"
        :class="{
          'govuk-error-message': errorText !== ''
        }"
      >
        <span class="govuk-visually-hidden">Error:</span> {{ errorText }}
      </span>
      <div class="govuk-radios govuk-radios--inline">
        <slot name="radioinputs"></slot>
      </div>
    </fieldset>
    <!-- button -->
    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  name: "FormGenderType",
  props: {
    errorText: {
      type: String,
      required: true
    }
  },
  components: {},
  data: () => {
    return {};
  }
};
</script>
<style scoped lang="scss"></style>
