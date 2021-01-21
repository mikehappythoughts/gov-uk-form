<template>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      {{ inputTitle }}
    </dt>
    <dd class="govuk-summary-list__value">
      {{ userInput }}
    </dd>
    <dd class="govuk-summary-list__actions">
      <router-link class="govuk-link" :to="{ name: `Form${idx}` }"
        >Change<span class="govuk-visually-hidden">
          {{ inputTitle }}</span
        ></router-link
      >
    </dd>
  </div>
</template>

<script>
export default {
  name: "FormSummaryDetailsRow",
  props: {
    inputTitle: {
      type: String,
      required: true
    },
    userInput: {
      type: String,
      required: true
    },
    idx: {
      type: Number,
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
