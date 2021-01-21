export const formLogic = {
  data: () => {
    return {};
  },
  methods: {
    validateFormData() {
      this.userInput === "" ? this.showError() : this.submitFormData();
    },
    submitFormData() {
      this.resetErrorText();
      this.$store.commit("submitFormData", {
        userInput: this.userInput,
        formId: this.formId
      });
      this.goToNextForm();
    },
    goToNextForm() {
      !this.$store.getters.getisFormCompleted
        ? this.$router.push({ name: this.nextViewName })
        : this.$router.push({ name: "Summary" });
    },
    resetErrorText() {
      this.errorText = "";
    }
  },
  created() {
    const {
      inputTitle,
      userInput,
      formContentData
    } = this.$store.getters.getCurrentFormData(this.formId);

    // if form already completed add the data the user entered into the field previously
    if (userInput !== "") this.userInput = userInput;

    this.title = inputTitle;
    this.formContent = formContentData;
  }
};
