import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isFormCompleted: false,
    formData: [
      {
        inputTitle: "Enter your full name",
        idx: 0,
        userInput: "",
        formContentData: [{ id: "full-name" }]
      },
      {
        inputTitle: "What is your date of birth?",
        idx: 1,
        userInput: "",
        formContentData: [
          {
            labelName: "Day",
            id: "date-of-birth-day",
            inputWidth: 2,
            modelName: "day",
            type: "number"
          },
          {
            labelName: "Month",
            id: "date-of-birth-month",
            inputWidth: 2,
            modelName: "month",
            type: "number"
          },
          {
            labelName: "Year",
            id: "date-of-birth-year",
            inputWidth: 4,
            modelName: "year",
            type: "number"
          }
        ]
      },
      {
        inputTitle: "What is your gender?",
        idx: 2,
        userInput: "",
        formContentData: [
          { radioName: "Male", id: "select-genger" },
          { radioName: "Female", id: "select-genger" }
        ]
      }
    ]
  },
  mutations: {
    submitFormData: (state, { formId, userInput }) => {
      state.formData[formId].userInput = userInput;
    },
    setIsFormCompleted: (state, val) => {
      state.isFormCompleted = val;
    }
  },
  getters: {
    getCurrentFormData: state => idx => {
      return state.formData[idx];
    },
    getisFormCompleted: state => {
      return state.isFormCompleted;
    },
    getAllFormData: state => {
      return state.formData;
    }
  }
});
export default store;
