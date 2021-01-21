<template>
  <form-summary>
    <template v-slot:content>
      <form-summary-details-row
        v-for="{ inputTitle, userInput, idx } in summaryData"
        :key="inputTitle"
        :inputTitle="inputTitle"
        :userInput="userInput"
        :idx="idx"
      ></form-summary-details-row>
    </template>
  </form-summary>
</template>

<script>
import FormSummary from "@/components/app/Form/Summary/FormSummary.vue";
import FormSummaryDetailsRow from "@/components/app/Form/Summary/FormSummaryDetailsRow.vue";

export default {
  name: "Summary",
  components: {
    FormSummary,
    FormSummaryDetailsRow
  },
  data: () => {
    return {};
  },
  computed: {
    summaryData() {
      return this.$store.getters.getAllFormData;
    }
  },
  created() {
    if (!this.$store.getters.getisFormCompleted)
      this.$store.commit("setIsFormCompleted", true);
  }
};
</script>
<style scoped lang="scss"></style>
