<template>
  <div
    :class="[
      'govuk-form-group',
      { 'govuk-form-group--error': errorText !== '' }
    ]"
  >
    <h1 class="govuk-label-wrapper">
      <label class="govuk-label govuk-label--l" for="full-name">
        <!-- title -->
        <slot name="title"></slot>
      </label>
    </h1>
    <span
      id="full-name-error"
      :class="{
        'govuk-error-message': errorText !== ''
      }"
    >
      <span class="govuk-visually-hidden">Error:</span>{{ errorText }}
    </span>
    <!-- inputs -->
    <slot name="inputs"></slot>
    <!-- button -->
    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  name: "FormFullName",
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
