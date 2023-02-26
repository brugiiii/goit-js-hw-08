import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const feedbackFormEl = document.querySelector(".feedback-form");

populateForm();

feedbackFormEl.addEventListener("input", throttle(onFormInput, 500));
feedbackFormEl.addEventListener("submit", onFormSubmit);

const formData = {};

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();

  localStorage.removeItem(STORAGE_KEY);

  console.log(formData);

  Object.keys(formData).forEach((key) => delete formData[key]);
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const refs = {
      inputEl: feedbackFormEl.querySelector("input"),
      textareaEl: feedbackFormEl.querySelector("textarea"),
    };
    const parsedFormData = JSON.parse(savedData);
    const { email, message } = parsedFormData;

    refs.inputEl.value = email;
    refs.textareaEl.textContent = message;
  }
}
