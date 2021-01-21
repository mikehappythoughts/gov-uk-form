<template>
  <div
    :class="[
      'govuk-form-group',
      { 'govuk-form-group--error': errorText !== '' }
    ]"
  >
    <fieldset
      class="govuk-fieldset"
      role="group"
      aria-describedby="date-of-birth-hint ${id}-error"
    >
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
        <h1 class="govuk-fieldset__heading">
          <!-- title -->
          <slot name="title"></slot>
        </h1>
      </legend>
      <div :id="id" class="govuk-hint">
        For example, 12 11 2007
      </div>
      <span
        :id="`${id}-error`"
        :class="{
          'govuk-error-message': errorText !== ''
        }"
      >
        <span class="govuk-visually-hidden">Error:</span> {{ errorText }}
      </span>
      <div class="govuk-date-input" :id="id">
        <!-- date inputs -->
        <slot name="dateInputs"></slot>
      </div>
      <!-- button -->
      <slot name="button"></slot>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "FormDateOfBirth",
  props: {
    errorText: {
      type: String,
      required: true
    },
    id: {
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
