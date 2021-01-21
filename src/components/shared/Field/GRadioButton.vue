<template>
  <div class="govuk-radios__item">
    <input
      class="govuk-radios__input"
      v-bind="$attrs"
      :value="radioName"
      v-on="{
        ...$listeners,
        input: event => handleInput(event)
      }"
      :checked="value === radioName"
      :name="id"
      :type="type ? type : 'radio'"
    />
    <label class="govuk-label govuk-radios__label" :for="id">
      {{ radioName }}
    </label>
  </div>
</template>

<script>
export default {
  name: "GRadioButton",
  components: {},
  data: () => {
    return {};
  },
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    radioName: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>
<style scoped lang="scss"></style>
